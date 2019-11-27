## DailyKit UI

**Getting Started**
```bash
git clone https://github.com/dailykit/dailykit-ui.git
cd dailykit-ui
npm install

// Development
npm run dev

// Production
npm run build
```

**Contribution Guide**

 - All the components goes inside `src/components` folder.
 - Create a new folder inside `src/components` and give it the name of the component, for ex for a component named `breadcrumb` - 
    ``` 
    src
      -- components
        -- breadcrumb
    ```
- Inside your `breadcrumb` component folder create a `js` file for the component named `breadcrumb.js` that'll contain the component's markup, styling and the logic.
- Now create as many `*.stories.js` files inside your `breadcrumb` component folder to add the component's state, variants etc. to the style guide.
- Folder structure so far - 
  ``` 
    src
      -- components
        -- breadcrumb
		  -- breadcrumb.js
		  -- variants.stories.js
		  -- state.stories.js
  ```
s