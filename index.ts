import prisma from './prisma/client';

async function find() {
	try {
		const users = await prisma.user.findMany();
		console.log(users);
	} catch (error) {
		console.error('Error creating company:', error);
	} finally {
		await prisma.$disconnect();
	}
}

find();