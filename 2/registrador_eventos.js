
class TicketManager
{
    events = [];
    #priceBase = 10;
    idAuto = 1;

    getEvents()
    {
      return this.events;
    }

    addEvent(event)
    {
       const { price } = event;

       this.events.push({
         ...event,
         price: price + 0.15,
         date: new Date(),
         participants: [],
         id: this.idAuto
       });

       this.idAuto = this.idAuto + 1;
    }

    addUser(eventId, user)
    {
      const event = this.events.find((event) =>event.id === eventId );

      if(!event)
      {
         throw Error('No existe el evento.');
      }

      const userExist = event.participants.find((participant) => participant.id === user.id );

      if(!userExist)
      {
        event.participants.push(user);
      }
    }

    ponerEventoEnGira(eventId, newPlace, newDate)
    {
        const event = this.events.find((event) =>event.id === eventId );
        const newEvent = { ...event, id: this.idAuto, place: newPlace, date: new Date() };
        this.events.push(newEvent);
    }
}

const ticketManager = new TicketManager();

ticketManager.addEvent({ name: "AquaSol", price: 20 });
ticketManager.addUser(1, { name: "Nathan", id: 1 });

ticketManager.addEvent({ name: "AquaSol2", price: 30 });
ticketManager.addUser(2, { name: "Martin", id: 1 });

console.log('ticketManager');
console.log(ticketManager);
