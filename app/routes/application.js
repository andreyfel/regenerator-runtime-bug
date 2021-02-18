import Route from '@ember/routing/route';
import { resolve } from 'rsvp';

export default class ApplicationRoute extends Route {
  async model() {
    await resolve();
  }
}
