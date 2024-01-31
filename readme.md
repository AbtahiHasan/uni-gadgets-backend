## Uni Gadgets

## set up this project locally following few step

##### as a package manager i am use yarn

##### step 1 create .env file in root and this code into .env file

```bash
PORT=5000
DATABASE_URL=database url here
NODE_ENV=development

BCRYPT_SALT_ROUNDS=12
JWT_ACCESS_SECRET=9e4e8cb1cd4fbcb32a83e7ddce59cbb2753f4f7abff217f0d4fd8ad1389e80bf029a49
JWT_REFRESH_SECRET=521346153e3529f66fdd1c344797c77d057be044fc47e102c44c2bfe855215ee228657690191f30c5919f81
JWT_ACCESS_EXPIRES_IN=60d
JWT_REFRESH_EXPIRES_IN=356d

```

##### step 2 install

```bash
    yarn
```

##### step 3 run with ts-node-dev

```bash
    yarn dev
```
