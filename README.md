# How to run my project

```bast
git init
git remote add origin 
git pull origin main
```

#install this


```bash
npm install
```

### Run the development server
```bash
cd server
npm start
```

if you in folder server
```bash
cd ..
```
```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.
