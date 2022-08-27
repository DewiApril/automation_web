import { Given, When, Then } from '@cucumber/cucumber';
import product from '../pageobjects/product.page';

Given('User Go To Homepage', async () => {
    await product.navigateToEbay();
  });

When('User Click Category Cellphone and Accessories', async () => {
    await product.clickShopByCategory();
  });

When('User Click Cell Phones & Smartphones', async () => {
    await product.clickCellPhoneAcc();
    await product.clickCategorySideNav();
  });

When('User Add Filter Screen Size, Price, Item Location', async () => {
    await product.clickAllfilters();
    await product.clickFilterPrize();
    await product.clickFilterLocation();
    await product.clickFilterScreenSize();
  });

Then('User Successfully Filter Tags Are Applied', async () => {
    await product.validateResult();
  });

When('User search Macbook keyword', async () => {
    await product.inputKeyword();
  });

When('User changed keyword to Iphone', async () => {
    await product.changeKeyword();
  });

Then('Iphone will have displayed', async () => {
    await product.validateKeyword();
  });

