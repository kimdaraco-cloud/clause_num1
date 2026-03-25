# Authentication Login and Signup Forms

## Overview

Add `/login` and `/signup` pages with authentication forms. Each page contains an email field, a password field with a show/hide toggle, and a submit button. On submission the forms log the entered details to the browser console. Users can navigate easily between the two forms.

## Goals

- Provide a `/login` page with a login form
- Provide a `/signup` page with a signup form
- Allow users to toggle password visibility on both forms
- Log form data to the console on submission (no backend integration yet)
- Include clear navigation links to switch between the two forms

## Non-Goals

- Backend authentication or API integration
- Session management or token handling
- Form validation beyond browser-native behaviour
- Styling beyond functional layout

## Pages

### /login

- **Heading:** "Log In"
- **Fields:**
  - Email (type: email, required)
  - Password (type: password, required) with a show/hide toggle icon
- **Submit button:** labelled "Log In"
- **Link:** "Don't have an account? Sign up" → navigates to `/signup`
- **On submit:** log `{ email, password }` to the console and prevent default form submission

### /signup

- **Heading:** "Sign Up"
- **Fields:**
  - Email (type: email, required)
  - Password (type: password, required) with a show/hide toggle icon
- **Submit button:** labelled "Sign Up"
- **Link:** "Already have an account? Log in" → navigates to `/login`
- **On submit:** log `{ email, password }` to the console and prevent default form submission

## Password Visibility Toggle

- An icon button sits inside or adjacent to the password input
- Clicking it toggles the input between `type="password"` and `type="text"`
- The icon should reflect the current state (e.g. eye / eye-off)

## Navigation Between Forms

- Each form includes a plain text link at the bottom pointing to the other form
- No additional navigation bar or modal switching is required

## Acceptance Criteria

- [ ] `/login` renders with email, password, and submit fields
- [ ] `/signup` renders with email, password, and submit fields
- [ ] Password field toggles visibility on icon click on both pages
- [ ] Submitting the login form logs `{ email, password }` to the console
- [ ] Submitting the signup form logs `{ email, password }` to the console
- [ ] `/login` page has a link to `/signup`
- [ ] `/signup` page has a link to `/login`