class Cave {
    constructor(name) {
        this.name = name;

        // check if name is uppercase
        if (this.name.toUpperCase() === this.name) {
            this.isUpper = true;
        } else {
            this.isUpper = false;
        }

        this.connections = [];
    }

    addConnection = other => {
        this.connections.push(other);
        other.connections.push(this);
    };
}

module.exports = Cave;
