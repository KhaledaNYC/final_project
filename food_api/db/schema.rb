# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161005145122) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string   "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ingredients", force: :cascade do |t|
    t.string   "name"
    t.integer  "price_level"
    t.integer  "availability"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "ingredients_recipes", id: false, force: :cascade do |t|
    t.integer "recipe_id",     null: false
    t.integer "ingredient_id", null: false
    t.integer "amount"
    t.string  "measurement"
    t.index ["ingredient_id", "recipe_id"], name: "index_ingredients_recipes_on_ingredient_id_and_recipe_id", using: :btree
    t.index ["recipe_id", "ingredient_id"], name: "index_ingredients_recipes_on_recipe_id_and_ingredient_id", using: :btree
  end

  create_table "likes", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "menus", force: :cascade do |t|
    t.string   "name"
    t.string   "occasion"
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "menus_recipes", id: false, force: :cascade do |t|
    t.integer "recipe_id", null: false
    t.integer "menu_id",   null: false
    t.index ["menu_id", "recipe_id"], name: "index_menus_recipes_on_menu_id_and_recipe_id", using: :btree
    t.index ["recipe_id", "menu_id"], name: "index_menus_recipes_on_recipe_id_and_menu_id", using: :btree
  end

  create_table "menus_users", id: false, force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "menu_id", null: false
    t.index ["menu_id", "user_id"], name: "index_menus_users_on_menu_id_and_user_id", using: :btree
    t.index ["user_id", "menu_id"], name: "index_menus_users_on_user_id_and_menu_id", using: :btree
  end

  create_table "recipes", force: :cascade do |t|
    t.string   "name"
    t.string   "instructions"
    t.string   "description"
    t.string   "cuisine_type"
    t.string   "cooking_time"
    t.string   "difficulty_level"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.string   "course"
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "password_digest"
    t.string   "email"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "users_recipes", force: :cascade do |t|
    t.integer "user_id"
    t.integer "recipe_id"
    t.index ["recipe_id"], name: "index_users_recipes_on_recipe_id", using: :btree
    t.index ["user_id"], name: "index_users_recipes_on_user_id", using: :btree
  end

end
