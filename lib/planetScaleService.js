import prisma from './prisma';

const addParticipant = (name, email) => {
  return prisma.participant.create({
    data: {
      name: name,
      email: email
    },
  });
}

const getParticipants = () => {
  return prisma.participant.findMany({});
};


export { addParticipant, getParticipants };
