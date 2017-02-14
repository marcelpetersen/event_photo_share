import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { ProfileData } from '../../providers/profile-data';
import { ProfileEditPage } from '../profile-edit/profile-edit';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public userProfile: any;

  constructor(public nav: NavController, public profileData: ProfileData) {
    this.userProfile = this.profileData.getUserProfile();
  }

  ionViewDidLoad() {
    console.log('Hello ProfileEditPage Page');
  }

  goToProfileEdit(){
    this.nav.push(ProfileEditPage);
  }

}