// pipeline {
//     agent any

//     stages {
//         stage('Install') {
//             steps { sh 'npm install' }
//         }

//         stage('Test') {
//             steps { sh 'npm run test:ci' }
//         }

//         stage('Biuld') {
//             steps {sh 'npm run build:ci'}
//         }
//     }
// }

image: node:10.16.0

stages:
  - install
  - test
  - build
  - deploy

install:
  stage: install
  script:
    - npm install
  artifacts:
    expire_in: 1h
    paths:
      - node_modules/
  cache:
    paths:
      - node_modules/

test:
  stage: test
  variables:
    CHROME_BIN: google-chrome
  dependencies:
    - install
  before_script:
    - apt-get update && apt-get install -y apt-transport-https
    - wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
    - sh -c 'echo "deb https://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
    - apt-get update && apt-get install -y google-chrome-stable
  script:
    - npm run test:ci
  coverage: '/Statements.*?(\d+(?:\.\d+)?)%/'

build:
  stage: build
  variables:
    BUILD_CONFIG: "production"
  dependencies:
    - install
  script:
    - npm run build:ci
  artifacts:
    expire_in: 1h
    paths:
      - dist/
  only:
    - master
