// login page
const txtFieldEmail = $('//*[@id="app"]/div/form/div[1]/input');
const txtFieldPassword = $('//*[@id="app"]/div/form/div[2]/input');
const buttonLogin = $('/html[1]/body[1]/div[1]/div[1]/div[1]/form[1]/button[1]');
const closePopup = $('//*[@id="app"]/div[2]/div[1]/div[1]');
const lblUserName = $('//*[@id="app"]/div/div[2]/div[1]/div/div[1]/div[1]/div');
const errorWrongPassword = $('//*[@id="app"]/div/form/p[2]');
const errorWrongUsername= $('/html[1]/body[1]/div[1]/div[1]/div[1]/form[1]/p[2]');
const errorEmptyEmail= $

const LoginPage = function loginpage() {
    this.navigateLionParcel= async () => {
      await browser.url(process.env.URL_LION_PARCEL);
      await browser.maximizeWindow();
      await browser.pause(3000);
      };
    
    this.inputEmail= async () => {
      // await browser.maximizeWindow();
      await txtFieldEmail.waitForExist({ timeout: 20000 });
      await txtFieldEmail.setValue('conscgksu');
      };

    this.inputPassword= async () => {
      await txtFieldPassword.waitForExist({ timeout: 20000 });
      await txtFieldPassword.setValue('Genesis123');
      };
      
    this.inputInvalidPassword= async () => {
      await txtFieldPassword.waitForExist({ timeout: 20000 });
      await txtFieldPassword.setValue('1235qwert');
        };
        
    this.inputInvalidEmail= async () => {
      await txtFieldEmail.waitForExist({ timeout: 20000 });
      await txtFieldEmail.setValue('pos.testing.qaa');
          };
     
    this.clickButtonLogin= async () => {
      await buttonLogin.waitForClickable({ timeout: 60000 });
      await buttonLogin.click();
      await browser.pause(3000);
      };

    this.validateWrongPassword= async () => {
      await errorWrongPassword.waitForExist({ timeout: 10000 });
      await expect(errorWrongPassword).toHaveTextContaining('Password yang anda masukkan salah');
      };

    this.validateWrongEmail= async () => {
      await errorWrongUsername.waitForExist({ timeout: 10000 });
      await expect(errorWrongUsername).toHaveTextContaining('Email atau username yang anda masukkan salah');
      };

    this.closeAdsPopup= async () => {
      await closePopup.waitForExist({ timeout: 10000 });
      await closePopup.click();
      };  
    
    this.VerifyHomePage= async () => {
      await lblUserName.waitForExist({ timeout: 20000 });
      await expect(lblUserName).toHaveTextContaining('Hai, CONS CGK Super');
    // //   await browser.pause(5000);
      };

  };

  module.exports = new LoginPage();
