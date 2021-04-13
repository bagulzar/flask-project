import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state =
    {
      members: [],
      customers: [],
      products: [],
      exchanges: [],
      wins: [],
      sum: [],
      toggleMembersTable: false,
      toggleCustomersTable: false,
      toggleProductsTable: false,
      toggleExchangeTable: false,
      toggleAboutUs: true,
      toggleWinsTable: false,
      customerID: '',
      customerFirstName: '',
      customerLastName: '',
      customerEmail: '',
      customerTelephone: '',
      memberID: '',
      memberFirstName: '',
      memberLastName: '',
      memberStelle: '',
      memberAbteilung: '',
      exchangeID: '',
      exchangeType: '',
      exchangeKID: '',
      exchangeMID: '',
      exchangeCity: '',
      exchangeCountry: '',
      exchangeDeparture: '',
      exchangeReturn: ''
    }
    this.fetchWins = this.fetchWins.bind(this);
    this.fetchExchange = this.fetchExchange.bind(this);
    this.fetchMembers = this.fetchMembers.bind(this);
    this.renderExchangeTable = this.renderExchangeTable.bind(this);
    this.renderMembersTable = this.renderMembersTable.bind(this);
    this.fetchCustomers = this.fetchCustomers.bind(this);
    this.renderCustomersTable = this.renderCustomersTable.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.renderProductsTable = this.renderProductsTable.bind(this);
    this.renderAddCustomerForm = this.renderAddCustomerForm.bind(this);
    this.renderAddMemberForm = this.renderAddMemberForm.bind(this);
    this.renderAddExchangeForm = this.renderAddExchangeForm.bind(this);
    this.addCustomer = this.addCustomer.bind(this);
    this.addMember = this.addMember.bind(this);
    this.addExchange = this.addExchange.bind(this);
    this.deleteCustomer = this.deleteCustomer.bind(this);
    this.deleteExchange = this.deleteExchange.bind(this);
    this.deleteMember = this.deleteMember.bind(this);
    this.toggleAboutUs = this.toggleAboutUs.bind(this);
  }

  onCustomerIDChange(event) {
    this.setState({
      customerID: event.target.value
    })
  }
  onCustomerFirstNameChange(event) {
    this.setState({
      customerFirstName: event.target.value
    })
  }
  onCustomerLastNameChange(event) {
    this.setState({
      customerLastName: event.target.value
    })
  }
  onCustomerEmailChange(event) {
    this.setState({
      customerEmail: event.target.value
    })
  }
  onCustomerTelephoneChange(event) {
    this.setState({
      customerTelephone: event.target.value
    })
  }

  onMemberIDChange(event) {
    this.setState({
      memberID: event.target.value
    })
  }
  onMemberFirstNameChange(event) {
    this.setState({
      memberFirstName: event.target.value
    })
  }
  onMemberLastNameChange(event) {
    this.setState({
      memberLastName: event.target.value
    })
  }
  onMemberStelleChange(event) {
    this.setState({
      memberStelle: event.target.value
    })
  }
  onMemberAbteilungChange(event) {
    this.setState({
      memberAbteilung: event.target.value
    })
  }

  onExchangeIDChange(event) {
    this.setState({
      exchangeID: event.target.value
    })
  }
  onExchangeTypeChange(event) {
    this.setState({
      exchangeType: event.target.value
    })
  }
  onExchangeKIDChange(event) {
    this.setState({
      exchangeKID: event.target.value
    })
  }
  onExchangeMIDChange(event) {
    this.setState({
      exchangeMID: event.target.value
    })
  }
  onExchangeCityChange(event) {
    this.setState({
      exchangeCity: event.target.value
    })
  }
  onExchangeCountryChange(event) {
    this.setState({
      exchangeCountry: event.target.value
    })
  }
  onExchangeDepartureChange(event) {
    this.setState({
      exchangeDeparture: event.target.value
    })
  }
  onExchangeReturnChange(event) {
    this.setState({
      exchangeReturn: event.target.value
    })
  }

  renderAddCustomerForm() {
    let form = []
    let formDiv = []
    form.push(<TextField onChange={this.onCustomerIDChange.bind(this)} label="Kunden ID" variant="outlined" />)
    form.push(<TextField style={{ marginLeft: '2%' }} onChange={this.onCustomerFirstNameChange.bind(this)} label="Vorname" variant="outlined" />)
    form.push(<TextField onChange={this.onCustomerLastNameChange.bind(this)} style={{ marginLeft: '2%' }} label="Nachname" variant="outlined" />)
    form.push(<TextField onChange={this.onCustomerEmailChange.bind(this)} style={{ marginLeft: '2%' }} label="Email" variant="outlined" />)
    form.push(<TextField onChange={this.onCustomerTelephoneChange.bind(this)} style={{ marginLeft: '2%' }} label="Telefonnummer" variant="outlined" />)
    form.push(<Button onClick={this.addCustomer} variant="contained" style={{ marginLeft: '2%', marginTop: '0.5%' }} color="primary">Add Customer</Button>)
    formDiv.push(<div style={{ marginTop: '5%', marginLeft: '5%', marginBottom: '2%' }}><form noValidate autoComplete="off">{form}</form></div>)
    return formDiv
  }

  renderAddMemberForm() {
    let form = []
    let formDiv = []
    form.push(<TextField onChange={this.onMemberIDChange.bind(this)} label="Mitglied ID" variant="outlined" />)
    form.push(<TextField style={{ marginLeft: '2%' }} onChange={this.onMemberFirstNameChange.bind(this)} label="Vorname" variant="outlined" />)
    form.push(<TextField onChange={this.onMemberLastNameChange.bind(this)} style={{ marginLeft: '2%' }} label="Nachname" variant="outlined" />)
    form.push(<TextField onChange={this.onMemberStelleChange.bind(this)} style={{ marginLeft: '2%' }} label="Stelle" variant="outlined" />)
    form.push(<TextField onChange={this.onMemberAbteilungChange.bind(this)} style={{ marginLeft: '2%' }} label="Abteilung" variant="outlined" />)
    form.push(<Button onClick={this.addMember} variant="contained" style={{ marginLeft: '2%', marginTop: '0.5%' }} color="primary">Add Member</Button>)
    formDiv.push(<div style={{ marginTop: '5%', marginLeft: '5%', marginBottom: '2%' }}><form noValidate autoComplete="off">{form}</form></div>)
    return formDiv
  }

  renderAddExchangeForm() {
    let form = []
    let formDiv = []
    let row1 = []
    let row2 = []
    let div = []
    row1.push(<TextField onChange={this.onExchangeIDChange.bind(this)} label="Exchange ID" variant="outlined" />)
    row1.push(<TextField style={{ marginLeft: '2%' }} onChange={this.onExchangeTypeChange.bind(this)} label="Exchange Type" variant="outlined" />)
    row1.push(<TextField onChange={this.onExchangeKIDChange.bind(this)} style={{ marginLeft: '2%' }} label="Kunden ID" variant="outlined" />)
    row1.push(<TextField onChange={this.onExchangeMIDChange.bind(this)} style={{ marginLeft: '2%' }} label="Mitglieder ID" variant="outlined" />)
    div.push(row1)
    row2.push(<TextField onChange={this.onExchangeCityChange.bind(this)} label="City" variant="outlined" />)
    row2.push(<TextField onChange={this.onExchangeCountryChange.bind(this)} style={{ marginLeft: '2%' }} label="Country" variant="outlined" />)
    row2.push(<TextField onChange={this.onExchangeDepartureChange.bind(this)} style={{ marginLeft: '2%' }} label="Departure Date" variant="outlined" />)
    row2.push(<TextField onChange={this.onExchangeReturnChange.bind(this)} style={{ marginLeft: '2%' }} label="Return Date" variant="outlined" />)
    row2.push(<Button onClick={this.addExchange} variant="contained" style={{ marginLeft: '2%', marginTop: '0.5%' }} color="primary">Add Exchange</Button>)
    div.push(row2)
    form.push(<div style={{display: 'flex', flexDirection: 'row'}}>{row1}</div>)
    form.push(<div style={{display: 'flex', flexDirection: 'row', marginTop: '2%'}}>{row2}</div>)
    formDiv.push(<div style={{ marginTop: '5%', marginLeft: '5%', marginBottom: '2%' }}><form noValidate autoComplete="off">{form}</form></div>)
    return formDiv
  }

  addCustomer() {
    let isnum = /^\d+$/.test(this.state.customerID);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.customerID.length === 0 || this.state.customerFirstName.length === 0 || this.state.customerLastName.length === 0 || this.state.customerEmail.length === 0 || this.state.customerTelephone.length === 0) {
      alert('Please fill all fields')
    } else if (!isnum) {
      alert('Kunden ID must be numeric')
    } else if (!re.test(String(this.state.customerEmail).toLowerCase())) {
      alert('Email format invalid')
    }
    else {
      let jsonRequest = {}
      jsonRequest['id'] = this.state.customerID
      jsonRequest['firstName'] = this.state.customerFirstName
      jsonRequest['lastName'] = this.state.customerLastName
      jsonRequest['email'] = this.state.customerEmail
      jsonRequest['telephone'] = this.state.customerTelephone
      fetch("http://localhost:8080/server/add-customer/",
        {
          method: "post",
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(jsonRequest)
        })
        .then(res => {
          if (res.status === 200) {
            alert('Customer Added Successfully')
            this.fetchCustomers()
          }
          else if (res.status === 409) {
            alert('Customer Already Exists')
          }
        });
    }
  }

  addMember() {
    let isnum = /^\d+$/.test(this.state.memberID);
    if (this.state.memberID.length === 0 || this.state.memberFirstName.length === 0 || this.state.memberLastName.length === 0 || this.state.memberStelle.length === 0 || this.state.memberAbteilung.length === 0) {
      alert('Please fill all fields')
    } else if (!isnum) {
      alert('Mitglied ID must be numeric')
    } else if (this.state.memberStelle.length > 6) {
      alert('Stelle cannot be more than 6 characters')
    } else if (this.state.memberAbteilung.length > 3) {
      alert('Abteilung cannot be more than 3 characters')
    }
    else {
      let jsonRequest = {}
      jsonRequest['id'] = this.state.memberID
      jsonRequest['firstName'] = this.state.memberFirstName
      jsonRequest['lastName'] = this.state.memberLastName
      jsonRequest['stelle'] = this.state.memberStelle
      jsonRequest['abteilung'] = this.state.memberAbteilung
      fetch("http://localhost:8080/server/add-member/",
        {
          method: "post",
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(jsonRequest)
        })
        .then(res => {
          if (res.status === 200) {
            alert('Member Added Successfully')
            this.fetchMembers()
          }
          else if (res.status === 409) {
            alert('Member Already Exists')
          }
        });
    }
  }

  addExchange() {
    let idIsnum = /^\d+$/.test(this.state.exchangeID);
    let kidIsnum = /^\d+$/.test(this.state.exchangeKID);
    let midIsnum = /^\d+$/.test(this.state.exchangeMID);
    if (this.state.exchangeID.length === 0 || this.state.exchangeType.length === 0 || this.state.exchangeKID.length === 0 || this.state.exchangeMID.length === 0 || this.state.exchangeCity.length === 0 || this.state.exchangeCountry.length === 0 || this.state.exchangeDeparture.length === 0 || this.state.exchangeReturn.length === 0) {
      alert('Please fill all fields')
    } else if (!idIsnum) {
      alert('Exchange ID must be numeric')
    } else if (!kidIsnum) {
      alert('Kunden ID must be numeric')
    } else if (!midIsnum) {
      alert('Mitglied ID must be numeric')
    }
    else {
      let jsonRequest = {}
      jsonRequest['id'] = this.state.exchangeID
      jsonRequest['type'] = this.state.exchangeType
      jsonRequest['kundenID'] = this.state.exchangeKID
      jsonRequest['mitgliedID'] = this.state.exchangeMID
      jsonRequest['city'] = this.state.exchangeCity
      jsonRequest['country'] = this.state.exchangeCountry
      jsonRequest['departure'] = this.state.exchangeDeparture
      jsonRequest['return'] = this.state.exchangeReturn
      fetch("http://localhost:8080/server/add-exchange/",
        {
          method: "post",
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(jsonRequest)
        })
        .then(res => {
          if (res.status === 200) {
            alert('Exchange Added Successfully')
            this.fetchExchange()
          }
          else if (res.status === 409) {
            alert('Exchange Already Exists')
          }
        });
    }
  }

  fetchProducts() {
    this.setState({ toggleMembersTable: false, toggleCustomersTable: false, toggleAboutUs: false, toggleExchangeTable: false, toggleWinsTable: false })
    fetch("http://localhost:8080/server/get-products/",
      {
        method: "get"
      })
      .then(res => res.json())
      .then(res => {
        this.setState({ products: res['exchangeProgramm'], toggleProductsTable: true })
      });
  }

  renderProductsTable() {
    let tableContainer = []
    let table = []
    let tableHead = []
    let tableRow = []
    if (this.state.products.length > 0) {
      tableHead.push(<TableCell><strong>Exchange Typ</strong></TableCell>)
      tableHead.push(<TableCell><strong>Preis</strong></TableCell>)
      tableHead.push(<TableCell><strong>Dauer</strong></TableCell>)
      table.push(<TableHead><TableRow>{tableHead}</TableRow></TableHead>)
      this.state.products.forEach(product => {
        let tableCell = []
        tableCell.push(<TableCell>{product.ExchangeTyp}</TableCell>)
        tableCell.push(<TableCell>{product.Preis}</TableCell>)
        tableCell.push(<TableCell>{product.Dauer}</TableCell>)
        tableRow.push(<TableRow>{tableCell}</TableRow>)
      });
      table.push(<TableBody>{tableRow}</TableBody>)
      tableContainer.push(<TableContainer component={Paper}><Table size="small">{table}</Table></TableContainer>)
    }
    return tableContainer
  }

  fetchCustomers() {
    this.setState({ toggleMembersTable: false, toggleProductsTable: false, toggleAboutUs: false, toggleExchangeTable: false, toggleWinsTable: false })
    fetch("http://localhost:8080/server/get-customers/",
      {
        method: "get"
      })
      .then(res => res.json())
      .then(res => {
        this.setState({ customers: res['kunde'], toggleCustomersTable: true })
      });
  }

  renderCustomersTable() {
    let tableContainer = []
    let table = []
    let tableHead = []
    let tableRow = []
    if (this.state.customers.length > 0) {
      tableHead.push(<TableCell><strong>Kunden ID</strong></TableCell>)
      tableHead.push(<TableCell><strong>Vorname</strong></TableCell>)
      tableHead.push(<TableCell><strong>Nachname</strong></TableCell>)
      tableHead.push(<TableCell><strong>Email</strong></TableCell>)
      tableHead.push(<TableCell><strong>Telefonnummer</strong></TableCell>)
      table.push(<TableHead><TableRow>{tableHead}</TableRow></TableHead>)
      for (let i = 0; i < this.state.customers.length; i++) {
        let tableCell = []
        tableCell.push(<TableCell>{this.state.customers[i].id}</TableCell>)
        tableCell.push(<TableCell>{this.state.customers[i].Vorname}</TableCell>)
        tableCell.push(<TableCell>{this.state.customers[i].Nachname}</TableCell>)
        tableCell.push(<TableCell>{this.state.customers[i].Email}</TableCell>)
        tableCell.push(<TableCell>{this.state.customers[i].Telefonnummer}</TableCell>)
        tableCell.push(<IconButton onClick={() => this.deleteCustomer(i)} type="button" style={{ outline: 'none' }}><CloseRoundedIcon style={{ color: '#990000' }} ></CloseRoundedIcon></IconButton>)
        tableRow.push(<TableRow>{tableCell}</TableRow>)
      }
      table.push(<TableBody>{tableRow}</TableBody>)
      tableContainer.push(<TableContainer component={Paper}><Table size="small">{table}</Table></TableContainer>)
    }
    return tableContainer
  }

  deleteCustomer(idx) {
    let jsonRequest = {}
    jsonRequest['id'] = this.state.customers[idx]['id']
    fetch("http://localhost:8080/server/delete-customer/",
      {
        method: "post",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonRequest)
      })
      .then(res => {
        if (res.status === 200) {
          this.fetchCustomers()
        }
      });
  }

  deleteExchange(idx) {
    let jsonRequest = {}
    jsonRequest['id'] = this.state.exchanges[idx]['Kunden_ID']
    fetch("http://localhost:8080/server/delete-customer/",
      {
        method: "post",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonRequest)
      })
      .then(res => {
        if (res.status === 200) {
          this.fetchExchange()
        }
      });
  }

  deleteMember(idx) {
    let jsonRequest = {}
    jsonRequest['id'] = this.state.members[idx]['id']
    fetch("http://localhost:8080/server/delete-member/",
      {
        method: "post",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonRequest)
      })
      .then(res => {
        if (res.status === 200) {
          this.fetchMembers()
        }
      });
  }

  fetchMembers() {
    this.setState({ toggleCustomersTable: false, toggleProductsTable: false, toggleAboutUs: false, toggleExchangeTable: false, toggleWinsTable: false })
    fetch("http://localhost:8080/server/get-members/",
      {
        method: "get"
      })
      .then(res => res.json())
      .then(res => {
        this.setState({ members: res['mitglied'], toggleMembersTable: true })
      });
  }

  fetchExchange() {
    this.setState({ toggleCustomersTable: false, toggleProductsTable: false, toggleAboutUs: false, toggleMembersTable: false, toggleWinsTable: false })
    fetch("http://localhost:8080/server/get-exchange/",
      {
        method: "get"
      })
      .then(res => res.json())
      .then(res => {
        this.setState({ exchanges: res['exchange'], toggleExchangeTable: true })
      });
  }

  fetchWins() {
    this.setState({ toggleCustomersTable: false, toggleProductsTable: false, toggleAboutUs: false, toggleMembersTable: false, toggleExchangeTable: false })
    fetch("http://localhost:8080/server/get-wins/",
      {
        method: "get"
      })
      .then(res => res.json())
      .then(res => {
        this.setState({ wins: res['exchangeTypeWins'], sum: res['exchangeSum'], toggleWinsTable: true })
      });
  }

  renderWinsTable() {
    let tableContainer = []
    let table = []
    let tableHead = []
    let tableRow = []
    if (this.state.wins.length > 0) {
      tableHead.push(<TableCell><strong>Exchange Type</strong></TableCell>)
      tableHead.push(<TableCell><strong>Preis</strong></TableCell>)
      table.push(<TableHead><TableRow>{tableHead}</TableRow></TableHead>)
      for (let i = 0; i < this.state.wins.length; i++) {
        let tableCell = []
        tableCell.push(<TableCell>{this.state.wins[i].ExchangeTyp}</TableCell>)
        tableCell.push(<TableCell>{this.state.wins[i].Preis}</TableCell>)
        tableRow.push(<TableRow>{tableCell}</TableRow>)
      }
      let tableCell = []
      tableCell.push(<TableCell><strong>Total</strong></TableCell>)
      tableCell.push(<TableCell>{this.state.sum[0]['sum']}</TableCell>)
      tableRow.push(<TableRow>{tableCell}</TableRow>)
      table.push(<TableBody>{tableRow}</TableBody>)
      tableContainer.push(<TableContainer style={{ marginBottom: '2%' }} component={Paper}><Table size="small">{table}</Table></TableContainer>)
    }
    return tableContainer
  }

  renderExchangeTable() {
    let tableContainer = []
    let table = []
    let tableHead = []
    let tableRow = []
    if (this.state.exchanges.length > 0) {
      tableHead.push(<TableCell><strong>Exchange ID</strong></TableCell>)
      tableHead.push(<TableCell><strong>Exchange Type</strong></TableCell>)
      tableHead.push(<TableCell><strong>Kunden ID</strong></TableCell>)
      tableHead.push(<TableCell><strong>Mitglieds ID</strong></TableCell>)
      tableHead.push(<TableCell><strong>To City</strong></TableCell>)
      tableHead.push(<TableCell><strong>To Country</strong></TableCell>)
      tableHead.push(<TableCell><strong>Departure Date</strong></TableCell>)
      tableHead.push(<TableCell><strong>Return Date</strong></TableCell>)
      table.push(<TableHead><TableRow>{tableHead}</TableRow></TableHead>)
      for (let i = 0; i < this.state.exchanges.length; i++) {
        let tableCell = []
        tableCell.push(<TableCell>{this.state.exchanges[i].id}</TableCell>)
        tableCell.push(<TableCell>{this.state.exchanges[i].ExchangeType}</TableCell>)
        tableCell.push(<TableCell>{this.state.exchanges[i].Kunden_ID}</TableCell>)
        tableCell.push(<TableCell>{this.state.exchanges[i].Mitglieds_ID}</TableCell>)
        tableCell.push(<TableCell>{this.state.exchanges[i].To_City}</TableCell>)
        tableCell.push(<TableCell>{this.state.exchanges[i].To_Country}</TableCell>)
        tableCell.push(<TableCell>{this.state.exchanges[i].Departure_Date}</TableCell>)
        tableCell.push(<TableCell>{this.state.exchanges[i].Return_Date}</TableCell>)
        tableCell.push(<IconButton onClick={() => this.deleteExchange(i)} type="button" style={{ outline: 'none' }}><CloseRoundedIcon style={{ color: '#990000' }} ></CloseRoundedIcon></IconButton>)
        tableRow.push(<TableRow>{tableCell}</TableRow>)
      }
      table.push(<TableBody>{tableRow}</TableBody>)
      tableContainer.push(<TableContainer component={Paper}><Table size="small">{table}</Table></TableContainer>)
    }
    return tableContainer
  }

  renderMembersTable() {
    let tableContainer = []
    let table = []
    let tableHead = []
    let tableRow = []
    if (this.state.members.length > 0) {
      tableHead.push(<TableCell><strong>Mitglieds ID</strong></TableCell>)
      tableHead.push(<TableCell><strong>Vorname</strong></TableCell>)
      tableHead.push(<TableCell><strong>Nachname</strong></TableCell>)
      tableHead.push(<TableCell><strong>Stelle</strong></TableCell>)
      tableHead.push(<TableCell><strong>Abteilung</strong></TableCell>)
      table.push(<TableHead><TableRow>{tableHead}</TableRow></TableHead>)
      for (let i = 0; i < this.state.members.length; i++) {
        let tableCell = []
        tableCell.push(<TableCell>{this.state.members[i].id}</TableCell>)
        tableCell.push(<TableCell>{this.state.members[i].Vorname}</TableCell>)
        tableCell.push(<TableCell>{this.state.members[i].Nachname}</TableCell>)
        tableCell.push(<TableCell>{this.state.members[i].Stelle}</TableCell>)
        tableCell.push(<TableCell>{this.state.members[i].Abteilung}</TableCell>)
        tableCell.push(<IconButton onClick={() => this.deleteMember(i)} type="button" style={{ outline: 'none' }}><CloseRoundedIcon style={{ color: '#990000' }} ></CloseRoundedIcon></IconButton>)
        tableRow.push(<TableRow>{tableCell}</TableRow>)
      }
      table.push(<TableBody>{tableRow}</TableBody>)
      tableContainer.push(<TableContainer component={Paper}><Table size="small">{table}</Table></TableContainer>)
    }
    return tableContainer
  }

  toggleAboutUs() {
    this.setState(
      {
        toggleAboutUs: true,
        toggleCustomersTable: false,
        toggleMembersTable: false,
        toggleProductsTable: false,
        toggleExchangeTable: false,
        toggleWinsTable: false
      }
    )
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Button onClick={this.toggleAboutUs} color="inherit">About Us</Button>
            <Button onClick={this.fetchCustomers} color="inherit">Our Customers</Button>
            <Button onClick={this.fetchProducts} color="inherit">Our Products</Button>
            <Button onClick={this.fetchMembers} color="inherit">Our Members</Button>
            <Button onClick={this.fetchExchange} color="inherit">Exchange</Button>
            <Button onClick={this.fetchWins} color="inherit">Calculate Wins</Button>
          </Toolbar>
        </AppBar>
        {this.state.toggleAboutUs ? <div style={{ marginTop: '2%', marginLeft: '2%', marginRight: '2%' }}><Typography variant="body1" gutterBottom>
          Willkommen bei Expa !
          Dies ist unsere neue GUI zur Verwaltung unserer Datenbank - in anderen Worten, dies ist das
          Werkzeug, um unsere Daten zu verwalten, sie zu präsentieren und einfach zu benutzen. Bitte
          beachten Sie, dass dies unsere erste Version ist. Wenn Sie also Fehler finden oder ein Feedback
        haben, lassen Sie es uns bitte <a target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLSdMyc-RgEeZtyPzCAv97ehFIuORxkifrigU_LZFpXEzZcQhKQ/viewform'>hier</a> wissen.
        </Typography></div> : null}
        {this.state.toggleMembersTable ? <div>
          {this.renderAddMemberForm()}
          {this.renderMembersTable()}
        </div> : null}
        {this.state.toggleCustomersTable ? <div>
          {this.renderAddCustomerForm()}
          {this.renderCustomersTable()}
        </div> : null}
        {this.state.toggleExchangeTable ? <div>
          {this.renderAddExchangeForm()}
          {this.renderExchangeTable()}
        </div> : null}
        {this.state.toggleWinsTable ? <div>
          {this.renderWinsTable()}
        </div> : null}
        {this.state.toggleProductsTable ? this.renderProductsTable() : null}
      </div>
    );
  }
}

export default App;
