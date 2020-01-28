## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :messages
- has_many :groups, through: :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group-name|string|||
|add-member|string|||
|user_id|integer|null: false, foreign_key: true|
### Association
- has_many :users, through: :groups_users
- had_many :messages

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group-id|integer|null: false, foreign_key: true|
## Association
- belongs_to :group
- belongs_to :user

## messages
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- has_many :users
- belongs_to :group
