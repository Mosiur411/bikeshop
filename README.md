# Assignment-3: Blogging Platform Backend

## Overview

I developed a powerful backend for a blogging platform, enabling both user and admin operations with full CRUD functionality, authentication, and authorization. Users can create, read, update, and delete their blogs, while admins have extended privileges to manage all content.

Key features include advanced search and filtering for efficient content discovery. The backend is built using Node.js, Express.js, TypeScript, and MongoDB, ensuring scalability, type safety, and high performance. JWT-based authentication secures user sessions, while role-based authorization safeguards resources. Designed with clean architecture and modularity, this backend provides a robust, efficient, and secure foundation for a modern blogging platform.

---

## Technology Stack

- **TypeScript**
- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **Stripe** 

---

## Features and Functionalities

### 1. User Roles

#### Admin Capabilities:
- Admin accounts are created manually with predefined credentials stored in the database.
- Privileges:
  - **Remove any blog.**
  - **Block users** by updating their `isBlocked` status.
- Restrictions:
  - **Cannot modify blog content.**

#### Regular User Capabilities:
- Can sign up and log in.
- Privileges:
  - **Add new blogs** (login required).
  - **Edit and delete their own blogs.**
- Restrictions:
  - **Cannot perform admin-specific actions.**

---

### 2. Authentication and Role-Based Access Control

#### Authentication:
- Login is mandatory for any **create**, **update**, or **delete** operations.

#### Authorization:
- Differentiation between admin and regular users ensures access control for restricted routes.
- Protected routes must only allow authorized actions based on the user's role.

---

### 3. Blog API

#### Public Blog API:
- Accessible endpoint to view blogs with essential information such as title, content, and author details.
- Features:
  - **Search:** Find blogs using keywords in titles or content.
  - **Sort:** Organize blogs by attributes like `createdAt` or `title`, with ascending or descending order.
  - **Filter:** Retrieve blogs based on criteria like author ID.

#### Admin-Specific Actions:
- Admins can moderate user-generated content as per their permissions.

#### User-Specific Actions:
- Users can fully manage blogs they have created while adhering to role-based limitations.


## Package use Management 
1. yarn add -D typescript @types/express @types/node
2. yarn add -D dotenv
3. yarn add -D express
4. yarn add -D @types/mongoose
4. yarn add -D @types/stripe
5. yarn add -D ts-node-dev
## Admin login crediential
  Email: admin@gmail.com
  password:  admin@gmail.com
## Hosting: 
**My server site hosting use vercel**

## Seen my server site provide infomation
1. **GitHub Link: https://github.com/Mosiur411/assignment-4-server**
2. **Live Link : https://assignment-4-server-blond.vercel.app/**


