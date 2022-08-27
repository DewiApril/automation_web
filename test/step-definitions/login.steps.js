import { Given, When, Then } from '@cucumber/cucumber';
import login from '../pageobjects/login.page';

Given('I on login page lionparcel', async () => {
    await login.navigateLionParcel();
  });

When('I input username and password', async () => {
    await login.inputEmail();
    await login.inputPassword();
  });

When('I click button enter', async () => {
    await login.clickButtonLogin();
    await login.closeAdsPopup();
  });

Then('Dashboard page will be displayed', async () => {
    await login.VerifyHomePage();
  });

