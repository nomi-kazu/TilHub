require 'rails_helper'

RSpec.describe 'Api::V1::Folders', type: :request do
  describe 'GET /api/v1/folders/:id' do
    subject(:call_api){ get "/api/v1/folders/#{folder.id}" }

    let!(:user) { create(:confirmed_user) }
    let!(:headers) { user.create_new_auth_token }
    let!(:folder) { create :folder, user_id: user.id }

    context '子folderが存在している場合' do
      let!(:child_folder) { create :folder, user_id: user.id, parent_id: folder.id }
      let!(:relation) { create :folder_relationship, parent_id: folder.id, child_id: child_folder.id }

      it 'レスポンスステータスが200で返ること' do
        call_api
        expect(response.status).to eq 200
      end

      it 'レスポンスボディーにfolderの値が返ること' do
        call_api
        res = JSON.parse(response.body)
        expect(res['data']['attributes']['name']).to eq 'folder_test'
        expect(res['data']['attributes']['public']).to eq false
        expect(res['data']['attributes']['user-id']).to eq user.id
      end

      it 'レスポンスボディーに子folderの値も含まれていること' do
        call_api
        res = JSON.parse(response.body)
        expect(res['data']['attributes']['child-folders'][0]['name']).to eq child_folder.name
        expect(res['data']['attributes']['child-folders'][0]['public']).to eq child_folder.public
        expect(res['data']['attributes']['child-folders'][0]['user_id']).to eq child_folder.user_id
      end
    end

    context '親folderが存在している場合' do
      let!(:parent_folder) { create :folder, user_id: user.id }
      before { folder.update(parent_id: parent_folder.id) }

      it 'レスポンスステータスが200で返ること' do
        call_api
        expect(response.status).to eq 200
      end

      it 'レスポンスボディーにfolderの値が返ること' do
        call_api
        res = JSON.parse(response.body)
        expect(res['data']['attributes']['name']).to eq 'folder_test'
        expect(res['data']['attributes']['public']).to eq false
        expect(res['data']['attributes']['user-id']).to eq user.id
      end

      it 'レスポンスボディーに親folderの値も含まれていること' do
        call_api
        res = JSON.parse(response.body)
        expect(res['data']['attributes']['parent-folder']['name']).to eq parent_folder.name
        expect(res['data']['attributes']['parent-folder']['public']).to eq parent_folder.public
        expect(res['data']['attributes']['parent-folder']['user_id']).to eq parent_folder.user_id
      end
    end

    context 'postが存在している場合' do
      let!(:post) { create :post, user_id: user.id, folder_id: folder.id }

      it 'レスポンスステータスが200で返ること' do
        call_api
        expect(response.status).to eq 200
      end

      it 'レスポンスボディーにfolderの値が返ること' do
        call_api
        res = JSON.parse(response.body)
        expect(res['data']['attributes']['name']).to eq 'folder_test'
        expect(res['data']['attributes']['public']).to eq false
        expect(res['data']['attributes']['user-id']).to eq user.id
      end

      it 'レスポンスボディーにpostの値も含まれていること' do
        call_api
        res = JSON.parse(response.body)
        expect(res['data']['attributes']['posts'][0]['name']).to eq 'test'
        expect(res['data']['attributes']['posts'][0]['content']).to eq 'example'
        expect(res['data']['attributes']['posts'][0]['public']).to eq false
        expect(res['data']['attributes']['posts'][0]['user_id']).to eq user.id
        expect(res['data']['attributes']['posts'][0]['folder_id']).to eq folder.id
      end
    end

    context 'postが存在していない場合' do

      it 'レスポンスステータスが200で返ること' do
        call_api
        expect(response.status).to eq 200
      end

      it 'レスポンスボディーに期待された値が返ること' do
        call_api
        res = JSON.parse(response.body)
        expect(res['data']['attributes']['name']).to eq 'folder_test'
        expect(res['data']['attributes']['public']).to eq false
        expect(res['data']['attributes']['user-id']).to eq user.id
      end
    end
  end

  describe 'POST /api/v1/folders' do
    subject(:call_api){ post "/api/v1/folders", headers: headers, params: params }

    let(:user) { create(:confirmed_user) }
    let(:headers) { user.create_new_auth_token }
    let(:params) { {} }

    context '投稿の作成に成功した場合' do
      let(:params) do
        {
          folder: {
            name: 'folder_test',
            public: false,
            user_id: user.id
          }
        }
      end

      it 'レスポンスステータスが200で返ること' do
        call_api
        expect(response.status).to eq 200
      end

      it '投稿が作成されていること' do
        expect { call_api }.to change { Folder.count }.from(0).to(1)
      end

      it 'レスポンスボディーに期待された値が返ること' do
        call_api
        res = JSON.parse(response.body)
        expect(res['data']['attributes']['name']).to eq 'folder_test'
        expect(res['data']['attributes']['public']).to eq false
        expect(res['data']['attributes']['user-id']).to eq user.id
      end
    end

    context '投稿の作成に失敗した場合' do
      let(:params) do
        {
          folder: {
            name: '',
            public: false,
          }
        }
      end

      it 'レスポンスステータスが422で返ること' do
        call_api
        expect(response.status).to eq 422
      end

      it 'バリデーションエラーが返ること' do
        call_api
        res = JSON.parse(response.body)
        expect(res["name"]).to eq ['を入力してください']
      end
    end
  end

  describe 'PUT /api/v1/folders/:id' do
    subject(:call_api) { put "/api/v1/folders/#{folder.id}", headers: headers, params: params }

    let(:user) { create :confirmed_user }
    let(:user2) { create :confirmed_user, username: 'test_name' }
    let(:headers) { user.create_new_auth_token }
    let(:folder) { create :folder, user_id: user.id }
    let(:params) {{ }}

    context 'ログインユーザーと投稿ユーザーが一致している場合' do
      context '投稿の更新に成功した場合' do
        let(:params) do
          {
            folder: {
              name: 'update_folder_test',
              public: false,
            }
          }
        end

        it 'レスポンスステータスが200で返ること' do
          call_api
          expect(response.status).to eq 200
        end

        it 'レスポンスボディーに期待された値が返ること' do
          call_api
          res = JSON.parse(response.body)
          expect(res['data']['attributes']['name']).to eq 'update_folder_test'
          expect(res['data']['attributes']['public']).to eq false
          expect(res['data']['attributes']['user-id']).to eq user.id
        end
      end

      context '投稿の更新に失敗した場合' do
        let(:params) do
          {
            folder: {
              name: '',
              public: false
            }
          }
        end

        it 'レスポンスステータスが422で返ること' do
          call_api
          expect(response.status).to eq 422
        end

        it 'バリデーションエラーが返ること' do
          call_api
          res = JSON.parse(response.body)
          expect(res["name"]).to eq ['を入力してください']
        end
      end
    end

    context 'ログインユーザーと投稿ユーザーが一致していない場合' do
      before { folder.update(user_id: user2.id) }

      it 'アクセス権限がないと言われる' do
        call_api
        res = JSON.parse(response.body)
        expect(res['success']).to eq false
        expect(res['errors']).to eq ['アクセスする権限がありません']
      end
    end
  end

  describe 'DELETE /api/v1/folders/:id' do
    subject(:call_api) { delete "/api/v1/folders/#{folder.id}", headers: headers }

    let(:user) { create :confirmed_user }
    let(:user2) { create :confirmed_user, username: 'test_name' }
    let(:headers) { user.create_new_auth_token }
    let(:folder) { create :folder, user_id: user.id }

    context 'ログインユーザーと投稿ユーザーが一致している場合' do
      context '投稿の削除に成功した場合' do
        it 'レスポンスステータスが200で返ること' do
          call_api
          expect(response.status).to eq 200
        end

        it '投稿が削除されていること' do
          expect { call_api }.to change { Folder.count }.by(0)
        end

        it 'レスポンスボディーに期待された値が返ること' do
          call_api
          res = JSON.parse(response.body)
          expect(res['message']).to eq '削除に成功しました'
        end
      end
    end

    context 'ログインユーザーと投稿ユーザーが一致していない場合' do
      before { folder.update(user_id: user2.id) }

      it 'アクセス権限がないと言われる' do
        call_api
        res = JSON.parse(response.body)
        expect(res['success']).to eq false
        expect(res['errors']).to eq ['アクセスする権限がありません']
      end
    end
  end
end
