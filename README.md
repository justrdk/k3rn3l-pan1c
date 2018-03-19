# k3rn3l-pan1c
modus create react native challenge

## Challenges
First challenge was thinking of the UI and UX of the application. Luckily I didn't had any environment issues, I used create-react-native-app to create the project structure and have everything setup and ready to work rapidly.

Had some challenges on sharing events between components, could have been easier with redux since actions would be global but this app was too small to use redux for it. This is why I decided to render Header and Footer Components within the Calendar render function instead of the root component.

## Roadblocks
Had some erros regarding this context on functions passed down to children components. I decided to define all internal functions of the Calendar class as arrow functions to avoid headaches of binding this to the correct context. Environment issues with java to be able to test on android. No issues with IOS

## Lessons Learned
- No need to define a constructor and super the props if `this.props` won't be used inside the constructor.
- Default props can come in handy a lot!
create-react-native-app comes in very handy but need to be sure no need for libraries that required `rnpm link` otherwise app has to be `ejected`.
- Expo rocks! easy to test app on real device and on emulator.
- App would have been more functional with redux on it but no need for redux since app is not complex on state management.
- Learned about the `onLayout` event. Used to detect screen orientation change.

Time to complete: ~5 hours (Was a fun challenge!)

Instructions to run app are inside kernel-panic Readme.md
But just need to: `yarn run ios` or `yarn run android`
To modify the data of weeks, modify file: `weeks.js` on the root of the project.
