# Edge Functions Bug

## Steps to reproduce
```bash
git clone git@github.com:edg-test/edge-functions-bug.git
cd edge-functions-bug
npm install
npx edgio dev # Open the browser and navigate to http://localhost:3000. Works.
npx edgio build
npx edgio run -p # Open the browser and navigate to http://localhost:3000. Doesn't work. The error is in the console.
```