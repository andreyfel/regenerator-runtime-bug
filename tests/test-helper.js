import Application from 'regenerator-runtime-bug/app';
import config from 'regenerator-runtime-bug/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
