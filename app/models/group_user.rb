class GroupUser < ApplicationRecord
  belongs_to :group
  belongs_to :user

  # def index
  #   @group_user = Group.includes(:user)
  # end
end
