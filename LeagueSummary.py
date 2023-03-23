import requests
import json

api_url = "http://localhost:8080/api/"

# Login
login_body = json.dumps({"username": "david", "password": "P@ssw0rd!"})
headers = {"Content-Type": "application/json"}

# Set login token
response = requests.post(api_url + "authenticate", data=login_body, headers=headers)
token = response.json()["jwt_token"]
headers["Authorization"] = "Bearer " + token

# Get league
# response = requests.get(api_url + "leagues/league2", headers=headers)
# league = response.json()

# Save league data
# with open('summary-page/data/league2/league2.json', 'w') as f:
#     json.dump(league, f, ensure_ascii=False, indent=4)

# Save league member rating data
# for app_user in league["appUsers"]:
#     response = requests.get(api_url + "rating/league2/user" + str(app_user["appUserId"]), headers=headers)
#     rating = response.json()
#     with open('summary-page/data/league2/'+app_user["username"]+'.json', 'w') as f:
#         json.dump(rating, f, ensure_ascii=False, indent=4)

# Get and save current leaderboard
response = requests.get(api_url + "leaderboard/season44/league2", headers=headers)
leaderboard = response.json()
with open('summary-page/src/data/league2/leaderboard'+str(leaderboard['currentTribal'])+'.json', 'w') as f:
    json.dump(leaderboard, f, ensure_ascii=False, indent=4)
with open('summary-page/src/data/league2/leaderboar.json', 'w') as f:
    json.dump(leaderboard, f, ensure_ascii=False, indent=4)

# Get and save current tribal
response = requests.get(api_url + 'castaway/tribals/season44', headers=headers)
tribal_numbers = response.json()
current_tribal = max(tribal_numbers)

# Get all tribals
for tribal in tribal_numbers:
    response = requests.get(api_url + 'castaway/season/tribal' + str(tribal), headers=headers)
    with open('summary-page/src/data/league2/tribal'+str(tribal)+'.json', 'w') as f:
        json.dump(response.json(), f, ensure_ascii=False, indent=4)

response = requests.get(api_url + 'castaway/season44/tribal' + str(current_tribal), headers=headers)
with open('summary-page/src/data/league2/current_tribal.json', 'w') as f:
    json.dump(response.json(), f, ensure_ascii=False, indent=4)