const { test, expect } = require('@playwright/test');

test('Portuguese mobile: create income/expense, validate balance and remove records', async ({page}) => {
  await page.setViewportSize({width:390,height:844});
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/?lang=pt');
  await page.getByRole('button',{name:'iniciar'}).click();
  const add=async (description,amount,type)=>{
    await page.getByLabel('Descrição').fill(description);
    await page.getByLabel('Valor').fill(amount);
    await page.getByLabel('Tipo de valor').selectOption(type);
    await page.getByRole('button',{name:'Inserir valor'}).click();
  };
  await add('Salário','100','Entrada');
  await add('Mercado','30','Despesa');
  await expect(page.locator('.total__value h3')).toContainText('70,00');
  await expect(page.locator('.card__container-expense')).toContainText('Mercado');
  await page.locator('.card__container-expense').getByRole('button',{name:'Excluir lançamento'}).click();
  await expect(page.locator('.total__value h3')).toContainText('100,00');
  await page.locator('.card__container').getByRole('button',{name:'Excluir lançamento'}).click();
  await expect(page.getByText('Você ainda não possui nenhum lançamento')).toBeVisible();
  expect(errors).toEqual([]);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth <= window.innerWidth+1)).toBe(true);
});

test('English desktop: translated controls and signed balance', async ({page})=>{
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/?lang=en');
  await page.getByRole('button',{name:'Get started'}).click();
  await page.getByLabel('Description').fill('Salary');
  await page.getByLabel('Amount').fill('250');
  await page.getByLabel('Transaction type').selectOption('Entrada');
  await page.getByRole('button',{name:'Add transaction'}).click();
  await page.getByLabel('Description').fill('Lunch');
  await page.getByLabel('Amount').fill('25');
  await page.getByLabel('Transaction type').selectOption('Despesa');
  await page.getByRole('button',{name:'Add transaction'}).click();
  await expect(page.locator('.total__value h3')).toContainText('225.00');
  await expect(page.getByRole('button',{name:'Delete entry'})).toHaveCount(2);
  expect(errors).toEqual([]);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth <= window.innerWidth+1)).toBe(true);
});
