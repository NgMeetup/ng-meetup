# Ng-Meetup

Ng-meetup is a customizable app that serves as a base to create your own mobile application for your meetup. It's build using AngularJS and Ionic.

The app is able to show some information from a meetup such as:

- General info of the meetup group
- List of events ordered by date
- Info from a specific event
	- General info from the event
	- Number of confirmed attendees
	- Event rating (only for past events)
- Map with the location of the venue and the possibility to get a route there from Google Maps

It also includes a small wrapper of the Meetup API so you don't have to deal with the backend if you don't want to. This backend is build with NodeJS and you can found it here: [ng-meetup/ng-meetup-backend]

If you want to test the app first, you can donwload a compiled demo .apk from the following link: [apk]

### Configuring the app

You are able to customize some parts of the app to make it look as your brand:
- Logo and Splash screen
- Primary color
- Url from the meetup
- Package name

### Current version
1.0.0

### App requirements

Ng-meetup is made using Ionic and Apache Cordova. You can install them globally by running the following commands:
```sh
sudo npm install -g cordova
```
```sh
sudo npm install -g ionic
```
For more information about installing ionic you can refer to: http://ionicframework.com/docs/guide/installation.html

A sass compiler is also needed, please refer to: http://compass-style.org/install/ if you need any help.

We are using [Gulp] as our taskmanager.

### Installation

To prepare the environment run:
```sh
sudo npm install
```
This command will install all the project dependencies. In order to prepare the environment you have to run: 
```sh
gulp prepare 
```
This will download all the bower dependencies, create the ionic platforms and install all the plugins that are required.

### Running the app

From the cordova folder
```sh
cd cordova 
```
You can run several commands in order to:

#### Run the app in the browser
```sh
ionic serve 
```

#### Install the app in a device
```sh
ionic run android --device 
```

### Further requirements

* Meetup API key is needed in the backend in order to be able to see all the attendees from an event.
* Google Maps key is needed in order to use the Google Maps Javascript API to calculate routes.

### License
MIT

#### Made with love by 
[@ginesortiz] and [@aserrabl]


[@ginesortiz]:<https://twitter.com/ginesortiz>
[@aserrabl]:<https://twitter.com/aserrabl>
[ng-meetup/ng-meetup-backend]: <https://github.com/NgMeetup/ng-meetup-server>
[apk]:<https://mega.nz/#!MdEU0b7T!JOcoPzTsAuRxEcaK1YvIu7XAqt4h9QMhQhxSQL8ED_I>
[Gulp]: <http://gulpjs.com>



