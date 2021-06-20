# COWIN VACCINATION

A web app created using React JS, to check the availabilty of vaccines in various districts of Odisha, view covid related statistics in India and the world and download vaccine certificate.

## Getting Started

1. Fork or clone the repository.
2. Open the directory in your local and run `npm install` in the cmd, to install required packages.
3. Run the command: `npm run start` for the application to get started on your default browser.

## Working of Cowin Vaccination

1. When the app opens on your localhost, the below landing page is shown.
![landing](https://user-images.githubusercontent.com/26769575/122637606-4659c380-d10d-11eb-91ab-16aa6de3e862.JPG)

2. Either select an option for your required district from the adjacent dropdown to check availabilty of vaccines or click on _Covid Statistics_ to view info related to covid.
3. When a district is selected from the dropdown, a table showing availability of vaccines is shown in various centers of that district.
![checkavail](https://user-images.githubusercontent.com/26769575/122637785-2676cf80-d10e-11eb-9313-d4e6ae040254.JPG)

4. To view statistics related to covid, click on _Statistics_ in the Navigation bar.
5. It shows various data of the world and on clicking on _India_, various data is shown. Scroll to see data of various states of India.
![stats](https://user-images.githubusercontent.com/26769575/122637867-88373980-d10e-11eb-9a9f-965a59a42869.JPG)

6. Click on each of the boxes, like, _Sites, Registrations_ to view relevant data.
![stats2](https://user-images.githubusercontent.com/26769575/122637940-dea47800-d10e-11eb-9d91-bde1f308d597.JPG)

7. **_NEW FEATURE_**: To download vaccine certificates, go to _Certificate_ in the Navbar.
![cert1](https://user-images.githubusercontent.com/26769575/122666282-01e02d80-d1ca-11eb-9797-a2b3e35a2aa0.JPG)

8. Enter your Registered Mobile No., and click _Send OTP_. 
![cert2](https://user-images.githubusercontent.com/26769575/122666365-5e434d00-d1ca-11eb-9d2f-cd97e49105a6.JPG)

9. Submit the OTP received on your phone. Once OTP is verified successfully, enter the _Beneficiary Reference ID_ for which you wish to download certificate and click _Download Certificate_. If the Beneficiary is registered to the mobile no., then the certificate would be downloaded.
![cert4](https://user-images.githubusercontent.com/26769575/122666427-baa66c80-d1ca-11eb-80cc-2cf073a635d3.JPG)

10. Please visit CoWIN portal by clicking on _CoWIN_ hyperlink, in the Navbar.

## API Reference

Data used/shown in this app have been taken from APIs, provided by [API Setu](https://apisetu.gov.in/public/marketplace/api/cowin/) and [https://covid-api.mmediagroup.fr/v1/cases]().

## Please Note

The developer of this app is no way responsible for incorrect data or in any other way for any discrepancy. Also, it is recommended to visit [CoWIN](https://www.cowin.gov.in/home), [Aarogya Setu](https://www.mygov.in/aarogya-setu-app/) and other Governement provided platforms for covid related info and for vaccination bookings.

## Contribution

If you like the app, don't forget to Star and if you find any issue or would like to add an enhancement, please raise a PR. Thank you!
