class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token

  # Can't verify CSRF token authenticity エラーを出力するように設定
  # protect_from_forgery with: :exception

  # APIモードにおけるCSRF用の機能を追加
  # include ActionController::RequestForgeryProtection

  # CSRF tokenを生成して、レスポンスヘッダに設定
  # def set_csrf_token_header
  #   response.set_header('X-CSRF-Token', form_authenticity_token)
  # end
end
