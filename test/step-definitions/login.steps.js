import { Given, When, Then } from '@cucumber/cucumber';
import login from '../pageobjects/login.page';

Given('I on login page lionparcel', async () => {
    await login.navigateLionParcel();
  });

When('I input username', async () => {
    await login.inputEmail();
  });

When('I input password', async () => {
    await login.inputPassword();
  });

When('I click button enter', async () => {
    await login.clickButtonLogin();
  });

When('I input invalid password', async () => {
    await login.inputInvalidPassword();
  });

Then('Dashboard page will be displayed', async () => {
    await login.VerifyHomePage();
    // await login.closeAdsPopup();
  });

