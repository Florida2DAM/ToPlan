using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ToPlan.Migrations
{
    public partial class m1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GastronomyTypes",
                columns: table => new
                {
                    GastronomyTypeId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GastronomyTypes", x => x.GastronomyTypeId);
                });

            migrationBuilder.CreateTable(
                name: "LeisureTypes",
                columns: table => new
                {
                    LeisureTypeId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LeisureTypes", x => x.LeisureTypeId);
                });

            migrationBuilder.CreateTable(
                name: "OtherTypes",
                columns: table => new
                {
                    OtherTypeId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OtherTypes", x => x.OtherTypeId);
                });

            migrationBuilder.CreateTable(
                name: "SportTypes",
                columns: table => new
                {
                    SportTypeId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SportTypes", x => x.SportTypeId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Surname = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    FechaNacimiento = table.Column<string>(nullable: true),
                    Preferences = table.Column<string>(nullable: true),
                    Admin = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "Events",
                columns: table => new
                {
                    EventId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    EventDate = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    Province = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    MaxMembers = table.Column<int>(nullable: false),
                    ListMembers = table.Column<string>(nullable: true),
                    CreatorEmail = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true),
                    GastronomyTypeId = table.Column<int>(nullable: false),
                    LeisureTypeId = table.Column<int>(nullable: false),
                    SportTypeId = table.Column<int>(nullable: false),
                    OtherTypeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Events", x => x.EventId);
                    table.ForeignKey(
                        name: "FK_Events_GastronomyTypes_GastronomyTypeId",
                        column: x => x.GastronomyTypeId,
                        principalTable: "GastronomyTypes",
                        principalColumn: "GastronomyTypeId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Events_LeisureTypes_LeisureTypeId",
                        column: x => x.LeisureTypeId,
                        principalTable: "LeisureTypes",
                        principalColumn: "LeisureTypeId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Events_OtherTypes_OtherTypeId",
                        column: x => x.OtherTypeId,
                        principalTable: "OtherTypes",
                        principalColumn: "OtherTypeId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Events_SportTypes_SportTypeId",
                        column: x => x.SportTypeId,
                        principalTable: "SportTypes",
                        principalColumn: "SportTypeId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Events_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Events_GastronomyTypeId",
                table: "Events",
                column: "GastronomyTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Events_LeisureTypeId",
                table: "Events",
                column: "LeisureTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Events_OtherTypeId",
                table: "Events",
                column: "OtherTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Events_SportTypeId",
                table: "Events",
                column: "SportTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Events_UserId",
                table: "Events",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Events");

            migrationBuilder.DropTable(
                name: "GastronomyTypes");

            migrationBuilder.DropTable(
                name: "LeisureTypes");

            migrationBuilder.DropTable(
                name: "OtherTypes");

            migrationBuilder.DropTable(
                name: "SportTypes");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
