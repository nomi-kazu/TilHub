class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :username, :image, :profile, :address, :created_at, :updated_at

  def image
    object.avatar.attached? ? url_for(object.avatar) : object.image
  end
end
