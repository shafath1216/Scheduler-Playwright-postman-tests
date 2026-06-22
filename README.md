# Scheduler QA Automation Suite

## Overview

This repository contains automated UI and API tests for the Scheduler web application.

The test suite was developed using:

* Playwright (UI Automation)
* Postman (API Testing)
* Newman (API Test Execution)
* GitHub Actions (CI/CD)

The objective of this project was to validate core application functionality, UI behavior, API responses, security checks, and end-to-end user workflows through automated testing.

---

## Test Coverage

The automation suite covers the following areas:

* Smoke Testing
* Functional Testing
* UI Testing
* API Testing
* Security Testing
* Authentication Testing
* End-to-End Workflow Validation

---

## Test Execution Summary

| Test Case ID | Title                                                    | Category           | Type       | Priority | Preconditions               | Expected Result                                       | Actual Result                            | Status | Defect                                                                      |
| ------------ | -------------------------------------------------------- | ------------------ | ---------- | -------- | --------------------------- | ----------------------------------------------------- | ---------------------------------------- | ------ | --------------------------------------------------------------------------- |
| SC_TC_001    | Verify application loads successfully                    | App Initialization | Smoke      | High     | App deployed and accessible | Login page loads without crash                        | UI loads successfully                    | Passed | -                                                                           |
| SC_TC_002    | Verify Login page UI elements are visible                | UI                 | UI         | High     | Application loaded          | Username, Password, Login and Signup controls visible | All elements visible                     | Passed | -                                                                           |
| SC_TC_003    | Verify user can log in with valid credentials            | Authentication     | Functional | High     | User exists (test/test123)  | User redirected to main page after login              | Login successful and redirected          | Passed | -                                                                           |
| SC_TC_004    | Verify invalid login is rejected                         | Authentication     | Negative   | High     | Application running         | Error displayed and login prevented                   | Login blocked successfully               | Passed | Two popup messages displayed (backend error + generic login failed message) |
| SC_TC_005    | Verify JWT tokens are stored after login                 | Authentication     | Functional | High     | Successful login            | Access and refresh tokens stored in localStorage      | Tokens generated and stored successfully | Passed | -                                                                           |
| SC_TC_006    | Verify todo list loads after login                       | API Integration    | Functional | High     | User logged in              | Existing todos are fetched and displayed              | Todo list loaded correctly               | Passed | -                                                                           |
| SC_TC_007    | Verify user can add a todo                               | Functional         | Functional | High     | User logged in              | Todo is created and appears in list                   | Todo created successfully                | Passed | -                                                                           |
| SC_TC_008    | Verify todo edit functionality works                     | Functional         | Functional | High     | Existing todo available     | Todo updates successfully                             | Todo updated correctly                   | Passed | -                                                                           |
| SC_TC_009    | Verify todo delete functionality works                   | Functional         | Functional | High     | Existing todo available     | Todo removed from list                                | Todo deleted successfully                | Passed | -                                                                           |
| SC_TC_010    | Verify token refresh works automatically                 | Authentication     | Functional | Medium   | User logged in              | Expired access token automatically refreshed          | New access token generated after expiry  | Passed | -                                                                           |
| SC_TC_011    | Verify logout clears session                             | Authentication     | Functional | High     | User logged in              | Session cleared and redirected to login page          | Tokens cleared successfully              | Passed | -                                                                           |
| SC_TC_012    | Verify protected routes cannot be accessed without login | API Security       | Negative   | High     | User logged out             | API returns 401 Unauthorized                          | 401 Unauthorized received                | Passed | -                                                                           |
| SC_TC_013    | Verify API returns valid JSON for todos                  | API                | API        | High     | Backend running             | Returns valid JSON response with 200 OK               | Valid JSON returned                      | Passed | -                                                                           |
| SC_TC_014    | Verify unauthorized API request is blocked               | Security           | API        | High     | No token provided           | Request rejected with 401 Unauthorized                | 401 Unauthorized received                | Passed | -                                                                           |

---

## Authentication Testing

The authentication-related tests validate system behavior during login, session handling, and token lifecycle.

### Covered Scenarios

* Valid login authentication flow
* Invalid login rejection
* Token generation (access & refresh)
* Token storage in browser localStorage
* Automatic token refresh after expiry
* Session termination on logout
* Protected API access control

### Defects Identified

| Defect ID | Description                                                                                                                                                |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DEF-001   | Invalid login displays two popup messages: backend error and generic "Login failed" message. A single unified error message would improve user experience. |

---

## Functional Testing

Functional tests validate core user operations within the Scheduler application.

### Covered Scenarios

* Todo creation
* Todo editing
* Todo deletion
* Todo list rendering after login
* Data consistency across UI actions

### Workflow Validated

Login → Load Todos → Add Todo → Edit Todo → Delete Todo → Logout

---

## UI Testing

UI automation tests ensure that key interface components are visible and functional.

### Covered Scenarios

* Login page UI elements visibility
* Button and input field rendering
* Page navigation validation
* Core layout rendering checks

---

## API Testing

API tests were executed using Postman and Newman.

### Covered Scenarios

* Authentication endpoint validation
* Todo API response validation
* JSON structure validation
* Status code verification
* Unauthorized access handling (401)

### Assertions

* 200 OK responses for valid requests
* 401 Unauthorized for protected endpoints without token
* Valid JSON response structure

---

## Tools Used

* Playwright
* Postman
* Newman
* JavaScript
* Node.js
* GitHub Actions

---

## Project Purpose

This project demonstrates practical QA engineering skills including:

* Functional testing
* UI automation
* API testing
* Security validation
* Authentication workflow testing
* End-to-end system validation
* Defect identification and reporting

The automation suite simulates real user interactions and validates application behavior across UI and API layers in a structured QA workflow.
