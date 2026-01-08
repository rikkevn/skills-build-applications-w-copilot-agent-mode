# This script ensures a unique index on the email field in the users collection for octofit_db.
# Run this in mongosh or as a script if needed.

# Connect to the octofit_db database
use octofit_db

# Create a unique index on the email field in the users collection
# (Django's default collection name for User model is 'octofit_tracker_user')
db.octofit_tracker_user.createIndex({ "email": 1 }, { unique: true })
