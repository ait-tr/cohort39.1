### Проекты:

- группа 1(Интернет магазин) [ссылка](https://drawsql.app/teams/sergeiteam/diagrams/internet-shop)
- группа 2(салон красоты) [ссылка](https://drawsql.app/teams/vera-team/diagrams/beauty-saloon)
- группа 3(детский сад) [ссылка](https://drawsql.app/teams/ela-team/diagrams/kindergarten)

```sql
SELECT
users.first_name,
users.last_name,
roles.role,
verification.phone
FROM
users
JOIN
roles
ON
roles.id = users.roles_id
JOIN
verification
ON
users.verification_id = verification.id;
```
