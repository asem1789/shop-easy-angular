import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { UiService } from 'src/app/_services/ui.service';

const imgDefault =
  'https://firebasestorage.googleapis.com/v0/b/shop-easy-angular.appspot.com/o/user.png?alt=media&token=ee8415a3-795b-43c7-b798-8bc450f86400';
@Component({
  selector: 'my-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);

  loading: boolean = false;
  error: string | null = null;

  constructor(private authService: AuthService, private uiService: UiService) {}

  ngOnInit(): void {
    this.uiService.loadingChanged.subscribe((isload) => {
      this.loading = isload;
    });
    this.uiService.errorStateChanged.subscribe((error) => {
      this.error = error;
    });
  }

  handleSubmit() {
    const additionalData = {
      displayName: this.name.value,
      photoURL: imgDefault,
    };
    this.authService.signup(
      this.email.value,
      this.password.value,
      additionalData
    );
  }

  onGoogleAuth() {
    this.authService.googleAuth();
  }
}
