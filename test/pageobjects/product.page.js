require('dotenv').config();

// Home Page
const buttonShopCategory = $('#gh-shop-a');
const urlPhoneAccesories = $('//a[contains(@href,"Cell-Phones-Smart-Watches-Accessories")]');
const urlPhoneSmartphone = $('//*[@id="s0-16-12_2-0-1[0]-0-0"]/ul/li[3]/a');
const barSearch = $('//*[@id="gh-ac"]')
const buttonSearch = $('#gh-btn')
const resultSearch = $('//*[@id="mainContent"]/div[1]/div/div[2]/div[1]/div[1]/h1/span[2]')

// Filters Page
const allFilters = $('//button[contains(text(),"All Filters")]');
const filterScreenSize = $('//*[@id="c3-mainPanel"]//div/span[@class="x-overlay-aspect__label" and text()="Screen Size"]')
const screenSize = $('//span[contains(text(),"4.0 - 4.4 in")]')
const filterPrize = $('//*[@id="c3-mainPanel"]//div/span[@class="x-overlay-aspect__label" and text()="Price"]')
const minprize = $('//*[@id="c3-subPanel-_x-price-textrange"]/div/div[1]/div/input')
const maxPrize = $('//*[@id="c3-subPanel-_x-price-textrange"]/div/div[2]/div/input')
const filterItemLocation = $('//*[@id="c3-mainPanel"]//div/span[@class="x-overlay-aspect__label" and text()="Item Location"]')
const asiaLocation = $('//*[@id="c3-subPanel-location_Asia"]/label/span[1]')
const count = $('//*[@id="innerlayer"]/button/span[1]')
const validate = $('#c3-tray-tray')


const EbayPage = function ebaypage() {
    this.navigateToEbay= async () => {
      await browser.url(process.env.BASE_URL);
      await browser.pause(3000);
      };

    this.clickShopByCategory = async () => {
      await browser.maximizeWindow();
      await buttonShopCategory.click();
    };

    this.clickCellPhoneAcc = async () => {
      await urlPhoneAccesories.click();
    };

    this.clickCategorySideNav = async () => {
      await urlPhoneAccesories.waitForExist({ timeout: 30000 });
      await urlPhoneSmartphone.click();
    };

    this.clickAllfilters = async () => {
      await allFilters.scrollIntoView({ behavior: 'smooth', block: 'start' });
      await allFilters.click();
      await browser.pause(3000);
    };

    this.clickFilterPrize = async () => {
      await filterPrize.waitForExist({ timeout: 50000 });
      await filterPrize.scrollIntoView({ behavior: 'smooth', block: 'start' });
      await filterPrize.click();
      await minprize.setValue('5000000');
      await maxPrize.setValue('10000000');
      await browser.pause(2000);
    };

    this.clickFilterLocation = async () => {
      await filterItemLocation.scrollIntoView({ behavior: 'smooth', block: 'start' });
      await filterItemLocation.click();
      await asiaLocation.click();
      await browser.pause(2000);
    };

    this.clickFilterScreenSize = async () => {
      await filterScreenSize.scrollIntoView({ behavior: 'smooth', block: 'start' });
      await filterScreenSize.click();
      await screenSize.click()
      await browser.pause(2000);
    };

    this.validateResult = async () => {
      await expect(count).toHaveTextContaining('(3) Filter(s) selected');
      await expect(validate).toHaveTextContaining('IDR5000000 - IDR10000000Asia4.0 - 4.4 in');
    };

    this.inputKeyword = async () => {
      await barSearch.waitForExist({ timeout: 20000 });
      await barSearch.setValue('MackBook');
      await buttonSearch.click();

    };

    this.changeKeyword = async () => {
      await barSearch.setValue('Iphone');
      await buttonSearch.click();
    };

    this.validateKeyword= async () => {
      await resultSearch.waitForExist({ timeout: 20000 });
      await expect(resultSearch).toHaveTextContaining('iphone');
    };

  };

  module.exports = new EbayPage();