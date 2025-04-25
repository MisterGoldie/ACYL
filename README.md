# Privy Login Widget

A lightweight, embeddable login widget that integrates Privy authentication into any website.

## Features

- Easy to integrate with a single script tag
- Customizable appearance and behavior
- Supports email and wallet login methods
- Dark/light theme support
- Responsive design
- Event handling for authentication state changes

## Quick Start

1. Add the widget container to your HTML:
```html
<div id="privy-login"></div>
```

2. Include the widget script:
```html
<script src="path/to/privy-login-widget.js"></script>
```

3. Initialize the widget:
```javascript
const widget = new PrivyLoginWidget({
    appId: 'YOUR_PRIVY_APP_ID',
    containerId: 'privy-login',
    buttonText: 'Connect Wallet',
    theme: 'dark',
    loginMethods: ['email', 'wallet']
});
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| appId | string | required | Your Privy App ID |
| containerId | string | 'privy-login-widget' | ID of the container element |
| buttonText | string | 'Login with Privy' | Text to display on the button |
| theme | string | 'dark' | Theme ('dark' or 'light') |
| loginMethods | array | ['email', 'wallet'] | Available login methods |
| onAuthChange | function | null | Callback for auth state changes |

## Events

The widget dispatches a custom event when authentication state changes:

```javascript
window.addEventListener('privyAuthChange', (event) => {
    const { user, authenticated } = event.detail;
    console.log('Auth state changed:', { user, authenticated });
});
```

## Public Methods

| Method | Description |
|--------|-------------|
| getPrivy() | Returns the Privy instance |
| isAuthenticated() | Returns whether user is authenticated |
| getUser() | Returns the current user object |

## Styling

The widget comes with default styling but can be customized using CSS:

```css
.privy-login-widget-button {
    /* Custom button styles */
    background: #your-color;
    /* etc */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License 