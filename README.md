# Project Description

An application that allows you to add, update, and delete contacts and persist data to [Firebase](https://www.firebase.com/).

# What You Will Learn

* How to add & remove data from Firebase & store
* How to edit and delete data from Firebase & store
* Work with more advanced state & prop data

# Installing and Running

Before running the following commands, make sure you have navigated into the project root directory first:

    $ cd react-contact-list

Install the `npm` modules:

    $ [sudo] npm install        # run as root if necessary

Since the public repo does not contain the actual `dist` directory, you will have to first build them with Gulp, which is simply just:

    $ gulp

The `dist` should be built with no errors and you can now run it on a local server:

    $ npm install http-server        # if it isn't installed yet
                                     # (add -g parameter for global installation)

    $ http-server dist -p 8080          # feel free to modify options as appropriate

If the instructions were followed sequentially and verbatim, the application shoudl now be available at <http://localhost:8080/>.
