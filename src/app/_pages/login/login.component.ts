import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { UiService } from 'src/app/_services/ui.service';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');
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
    this.authService.login(this.email.value, this.password.value);
  }

  onGoogleAuth() {
    this.authService.googleAuth();
  }
}
