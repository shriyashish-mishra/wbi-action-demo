export const pay = (stripe) => stripe.subscriptions.create({ plan: 'free-forever' });
