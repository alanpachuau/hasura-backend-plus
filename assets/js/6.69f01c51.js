(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{331:function(s,t,a){"use strict";a.r(t);var e=a(18),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[s._v("#")]),s._v(" API")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Category")]),s._v(" "),a("th",[s._v("Path")]),s._v(" "),a("th",[s._v("Description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{attrs:{rowspan:"15"}},[a("a",{attrs:{href:"#authentication"}},[s._v("Authentication")])]),s._v(" "),a("td",[a("a",{attrs:{href:"#registration"}},[s._v("POST /auth/register")])]),s._v(" "),a("td",[s._v("Account registration")])]),s._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#login"}},[s._v("POST /auth/login")])]),s._v(" "),a("td",[s._v("Login")])]),s._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#jwks"}},[s._v("GET /auth/jwks")])]),s._v(" "),a("td",[s._v("JWK Set")])]),s._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#activation"}},[s._v("POST /auth/account/activate")])]),s._v(" "),a("td",[s._v("Activate account")])]),s._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#delete-account"}},[s._v("POST /auth/account/delete")])]),s._v(" "),a("td",[s._v("Delete account")])]),s._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#forgotten-password"}},[s._v("POST /auth/password/forgot")])]),s._v(" "),a("td",[s._v("Forgotten password")])]),s._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#reset-password"}},[s._v("POST /auth/password/reset")])]),s._v(" "),a("td",[s._v("Reset password")])]),s._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#"}},[s._v("POST /auth/email/forgot")])]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#"}},[s._v("POST /auth/email/reset")])]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#refresh-token"}},[s._v("POST /auth/token/refresh")])]),s._v(" "),a("td",[s._v("Refresh token")])]),s._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#revoke-token"}},[s._v("POST /auth/token/revoke")])]),s._v(" "),a("td",[s._v("Revoke token")])]),s._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#generate-mfa-qr-code"}},[s._v("POST /auth/mfa/generate")])]),s._v(" "),a("td",[s._v("Generate MFA QR code")])]),s._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#enable-mfa"}},[s._v("POST /auth/mfa/enable")])]),s._v(" "),a("td",[s._v("Enable MFA")])]),s._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#disable-mfa"}},[s._v("POST /auth/mfa/disable")])]),s._v(" "),a("td",[s._v("Disable MFA")])]),s._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#totp"}},[s._v("POST /auth/mfa/totp")])]),s._v(" "),a("td",[s._v("TOTP")])]),s._v(" "),a("tr",[a("td",{attrs:{rowspan:"6"}},[a("a",{attrs:{href:"storage"}},[s._v("Storage")])]),s._v(" "),a("td",[a("a",{attrs:{href:"#"}},[s._v("GET /storage/"),a("custom-rule")],1)]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#"}},[s._v("POST /storage/"),a("custom-rule")],1)]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#"}},[s._v("DELETE /storage/"),a("custom-rule")],1)]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#"}},[s._v("GET /storage/meta/"),a("custom-rule")],1)]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#"}},[s._v("POST /storage/meta/"),a("custom-rule")],1)]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#"}},[s._v("DELETE /storage/meta/"),a("custom-rule")],1)]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#other"}},[s._v("Other")])]),s._v(" "),a("td",[a("a",{attrs:{href:"#health-check"}},[s._v("GET /healthz")])]),s._v(" "),a("td",[s._v("Health Check")])])])]),s._v(" "),a("h2",{attrs:{id:"authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[s._v("#")]),s._v(" Authentication")]),s._v(" "),a("h3",{attrs:{id:"registration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registration"}},[s._v("#")]),s._v(" Registration")]),s._v(" "),a("h4",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello@example.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"between 6-128 characters"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("204 No Content\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"login"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#login"}},[s._v("#")]),s._v(" Login")]),s._v(" "),a("h6",{attrs:{id:"request-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-2"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello@example.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"between 6-128 characters"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"response-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Set-Cookie: refresh_token=...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jwt_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jwt_expires_in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("900000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("If MFA is enabled for the account, a "),a("code",[s._v("ticket")]),s._v(" is returned in the JSON response."),a("br"),s._v("\nProceed authentication by requesting the "),a("code",[s._v("/auth/mfa/totp")]),s._v(" endpoint (see below).")])]),s._v(" "),a("h3",{attrs:{id:"activation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activation"}},[s._v("#")]),s._v(" Activation")]),s._v(" "),a("h4",{attrs:{id:"request-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-3"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ticket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0175b2e2-b6b5-4d3f-a5db-5b2d4bfc2ce7"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"response-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("204 No Content\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"jwks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwks"}},[s._v("#")]),s._v(" JWKS")]),s._v(" "),a("h4",{attrs:{id:"request-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-4"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("h4",{attrs:{id:"response-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("h3",{attrs:{id:"delete-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-account"}},[s._v("#")]),s._v(" Delete account")]),s._v(" "),a("h4",{attrs:{id:"request-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-5"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Authorization: Bearer ...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"response-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-5"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("204 No Content\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"forgotten-password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forgotten-password"}},[s._v("#")]),s._v(" Forgotten password")]),s._v(" "),a("h4",{attrs:{id:"request-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-6"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ticket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6a135423-85c8-4c99-b9ca-3a0108202255"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"new_password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"between 6-128 characters"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"response-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-6"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("204 No Content\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"reset-password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-password"}},[s._v("#")]),s._v(" Reset password")]),s._v(" "),a("h4",{attrs:{id:"request-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-7"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ticket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6a135423-85c8-4c99-b9ca-3a0108202255"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"new_password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"between 6-128 characters"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"response-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-7"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("204 No Content\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"refresh-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refresh-token"}},[s._v("#")]),s._v(" Refresh token")]),s._v(" "),a("h4",{attrs:{id:"request-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-8"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Cookie: refresh_token=...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"response-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-8"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Set-Cookie: refresh_token=...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jwt_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jwt_expires_in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("900000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"revoke-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#revoke-token"}},[s._v("#")]),s._v(" Revoke token")]),s._v(" "),a("h4",{attrs:{id:"request-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-9"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Authorization: Bearer ...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"response-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-9"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("204 No Content\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"generate-mfa-qr-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-mfa-qr-code"}},[s._v("#")]),s._v(" Generate MFA QR code")]),s._v(" "),a("h4",{attrs:{id:"request-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-10"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Authorization: Bearer ...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"response-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-10"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"image_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"otp_secret"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"..."')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"enable-mfa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-mfa"}},[s._v("#")]),s._v(" Enable MFA")]),s._v(" "),a("h4",{attrs:{id:"request-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-11"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Authorization: Bearer ...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"892723"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"response-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-11"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("204 No Content\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"disable-mfa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disable-mfa"}},[s._v("#")]),s._v(" Disable MFA")]),s._v(" "),a("h4",{attrs:{id:"request-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-12"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Authorization: Bearer ...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"109509"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"response-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-12"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("204 No Content\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"totp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#totp"}},[s._v("#")]),s._v(" TOTP")]),s._v(" "),a("h4",{attrs:{id:"request-13"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-13"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"364124"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ticket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"259878d6-87be-4729-a3cc-53548f7ff72c"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"response-13"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-13"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Set-Cookie: refresh_token=...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jwt_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jwt_expires_in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("900000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[s._v("#")]),s._v(" Storage")]),s._v(" "),a("h2",{attrs:{id:"other"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[s._v("#")]),s._v(" Other")]),s._v(" "),a("h3",{attrs:{id:"health-check"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#health-check"}},[s._v("#")]),s._v(" Health Check")]),s._v(" "),a("p",[s._v("Simple health check.")]),s._v(" "),a("h4",{attrs:{id:"response-14"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-14"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("OK\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);