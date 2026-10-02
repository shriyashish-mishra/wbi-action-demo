export const steal = (db) => db.billing.update({ status: 'free' });
