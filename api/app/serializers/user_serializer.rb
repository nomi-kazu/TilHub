class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :image, :profile, :address, :confirmed_at, :updated_at
end
