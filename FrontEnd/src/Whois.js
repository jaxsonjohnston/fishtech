export class Whois {

    submit(address) {
        this.setState(ApiState.LOADING);
        return new Promise((resolve, reject) => {
            fetch('https://dr5uhki0g9.execute-api.us-east-1.amazonaws.com/dev/whois/' + address)
                .then(response => response.text())
                .then(data => {
                    data = data.substr(14);
                    data = data.slice(0, -4);

                    if (data === "ERROR_BAD_ADDRESS") {
                        this.setState(ApiState.ERROR_BAD_ADDRESS, address);
                        resolve(ApiState.ERROR_BAD_ADDRESS, address);
                    } else {
                        this.setState(ApiState.SUCCESS, data);
                        resolve(ApiState.SUCCESS, data)
                    }
                })
                .catch(err => {
                    console.log(err);
                    this.setState(ApiState.ERROR_NETWORK, address)
                })
        });
    }

    setState(state, response) {
        if (!this.change) return;
        this.change(state, response);
    }

    onChangeListener(change) {
        this.change = change;
    }
}

export const ApiState = {
    LOADING: 0,
    ERROR_BAD_ADDRESS: 1,
    ERROR_NETWORK: 2,
    SUCCESS: 3
}