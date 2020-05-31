const Cash = (props) => {
  const value = (props.cash / props.ratio).toFixed(2)
  return (
    <div>{props.title} {props.cash <= 0 ? "" : value}</div>
  )
}

class ExchangeCounter extends React.Component {
  state = {
    amount: 0,
  }

  currencies = [
    {
      id: 1,
      name: 'dollar',
      ratio: 3.6,
      title: 'Wartość dollar: ',
    },
    {
      id: 2,
      name: 'euro',
      ratio: 4.1,
      title: 'Wartość euro: ',
    },
    {
      id: 3,
      name: 'funt',
      ratio: 4.55,
      title: 'Wartość funt: ',
    },
  ]

  handleChange = e => {
    this.setState({
      amount: e.target.value
    })
  }

  render() {

    const { amount } = this.state;

    const calculators = this.currencies.map(currency => (
      <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount} />
    ))

    return (
      <div className="app">
        <label>
          <input type="number" value={this.state.amount} onChange={this.handleChange} />

          {calculators}

        </label>
      </div>

    )
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))