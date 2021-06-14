class Stock {
    id: number;
    name: string;
    price: number;
    minimum: number;
    exclusivimoMinimum: boolean;
    variation: number;
    date: string;

    constructor(id: number, name: string, price: number, minimum: number,exclusivimoMinimum: boolean,variation: number, date: string ) {

      this.id = id;
      this.name = name;
      this.price = price;
      this.minimum = minimum;
      this.exclusivimoMinimum = exclusivimoMinimum;
      this.variation = variation;
      this.date = date;
    }
}

export default Stock;
