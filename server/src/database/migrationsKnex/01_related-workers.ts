import {Knex} from 'knex'

export async function up(knex:Knex) {
  return knex.schema.createTable('related_workers',table =>{
    table.increments('id').primary();
    table.integer('fk_worker');
    table.string('project_data').notNullable();
    table.integer('tasks_performed').notNullable();
    table.float('task_value').notNullable();
  })
}

export async function down(knex:Knex) {
  return knex.schema.dropTable('related_workers');
}