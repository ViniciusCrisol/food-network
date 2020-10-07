import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateComments1602112650634 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'commments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'content',
            type: 'varchar',
          },
          {
            name: 'author_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'post_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'CommentPost',
            referencedTableName: 'posts',
            referencedColumnNames: ['id'],
            columnNames: ['post_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'CommentAuthor',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['author_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('commments');
  }
}
