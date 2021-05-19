import knex, {Knex} from 'knex'

export async function up(knex:Knex) {
  return knex.schema.createTable('workers',table =>{
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('name').notNullable();
    table.string('date_nasc').notNullable();
    table.string('level').notNullable();
  })
}

export async function down(knex:Knex) {
  return knex.schema.dropTable('workers');
}