import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1611592785583 implements MigrationInterface {
  name = 'CreateTables1611592785583';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "offer" ("id" SERIAL NOT NULL, "full_price" double precision NOT NULL, "price_with_discount" double precision NOT NULL, "discount_percentage" double precision NOT NULL, "start_date" character varying NOT NULL, "enrollment_semester" character varying NOT NULL, "enabled" boolean NOT NULL, "courseId" integer, CONSTRAINT "PK_57c6ae1abe49201919ef68de900" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "university" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "score" double precision NOT NULL, "logo_url" character varying NOT NULL, CONSTRAINT "PK_d14e5687dbd51fd7a915c22ac13" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "course" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "kind" character varying NOT NULL, "shift" character varying NOT NULL, "level" character varying NOT NULL, "campusId" integer, "universityId" integer, CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "campus" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "city" character varying NOT NULL, CONSTRAINT "PK_150aa1747b3517c47f9bd98ea6d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "offer" ADD CONSTRAINT "FK_a745dc780852df0b11c360e4bf0" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "course" ADD CONSTRAINT "FK_a4cd9e2b75f458446ecedc2ade6" FOREIGN KEY ("campusId") REFERENCES "campus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "course" ADD CONSTRAINT "FK_81baebb85fd36de51634573ceed" FOREIGN KEY ("universityId") REFERENCES "university"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "course" DROP CONSTRAINT "FK_81baebb85fd36de51634573ceed"`,
    );
    await queryRunner.query(
      `ALTER TABLE "course" DROP CONSTRAINT "FK_a4cd9e2b75f458446ecedc2ade6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "offer" DROP CONSTRAINT "FK_a745dc780852df0b11c360e4bf0"`,
    );
    await queryRunner.query(`DROP TABLE "campus"`);
    await queryRunner.query(`DROP TABLE "course"`);
    await queryRunner.query(`DROP TABLE "university"`);
    await queryRunner.query(`DROP TABLE "offer"`);
  }
}
