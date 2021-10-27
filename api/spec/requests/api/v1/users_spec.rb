require 'rails_helper'

RSpec.describe "Api::V1::Users", type: :request do
  describe "GET /api/users/:id" do
    subject(:call_api){ get(api_v1_user_path(user)) }

    let(:user) { create(:user) }
    subject{ get(api_v1_user_path(user)) }
    it "ユーザーのデータを返す" do
      call_api
      res = JSON.parse(response.body)
      expect(res["data"]["id"]).to eq(User.last.id.to_s)
      expect(res["data"]["attributes"]["name"]).to eq(User.last.name)
      expect(response.status).to eq 200
    end
  end

  describe "validates length" do
    context "パスワードが８文字以下の場合" do
      let(:user) { build(:user, password: 'pass') }

      it "エラーになる" do
        user.valid?
        expect(user.errors.messages[:password]).to include "は8文字以上で入力してください"
      end
    end
  end
end
