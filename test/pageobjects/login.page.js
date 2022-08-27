// login page
const txtFieldEmail = $('//*[@id="app"]/div/form/div[1]/input');
const txtFieldPassword = $('//*[@id="app"]/div/form/div[2]/input');
const buttonLogin = $('/html[1]/body[1]/div[1]/div[1]/div[1]/form[1]/button[1]');
const closePopup = $('//*[@id="app"]/div[2]/div[1]/div[1]');
const lblUserName = $('//*[@id="app"]/div/div[2]/div[1]/div/div[1]/div[1]/div');


const LoginPage = function loginpage() {
    this.navigateLionParcel= async () => {
      await browser.url(process.env.URL_LION_PARCEL);
      await browser.pause(3000);
      };
    
    this.inputEmail= async () => {
    //   await browser.maximizeWindow();
      await txtFieldEmail.setValue('conscgksu');
      };

    this.inputPassword= async () => {
      await txtFieldPassword.setValue('Genesis123');
      };
    
    this.inputInvalidPassword= async () => {
      await txtFieldPassword.setValue('1235qwert');
      };
      
    this.clickButtonLogin= async () => {
      await buttonLogin.click();
      await browser.pause(3000);
      };

    this.closeAdsPopup= async () => {
      await closePopup.click();
      };  
    
    this.VerifyHomePage= async () => {
      await lblUserName.waitForExist({ timeout: 20000 });
      await expect(lblUserName).toHaveTextContaining('Hai, CONS CGK Super');
    //   await browser.pause(5000);
      }; 
    
  };

  module.exports = new LoginPage();