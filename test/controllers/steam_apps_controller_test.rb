require 'test_helper'

class SteamAppsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get steam_apps_index_url
    assert_response :success
  end

  test "should get show" do
    get steam_apps_show_url
    assert_response :success
  end

  test "should get edit" do
    get steam_apps_edit_url
    assert_response :success
  end

end
