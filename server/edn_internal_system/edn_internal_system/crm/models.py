from django.db import models


class Cache(models.Model):
    key = models.CharField(primary_key=True, max_length=255)
    value = models.TextField(blank=True, null=True)
    expiration = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cache'


class CacheLocks(models.Model):
    key = models.CharField(primary_key=True, max_length=255)
    owner = models.CharField(max_length=255, blank=True, null=True)
    expiration = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cache_locks'


class FailedJobs(models.Model):
    id = models.BigAutoField(primary_key=True)
    uuid = models.CharField(unique=True, max_length=255, blank=True, null=True)
    connection = models.TextField(blank=True, null=True)
    queue = models.TextField(blank=True, null=True)
    payload = models.TextField(blank=True, null=True)
    exception = models.TextField(blank=True, null=True)
    failed_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'failed_jobs'


class JobBatches(models.Model):
    id = models.CharField(primary_key=True, max_length=255)
    name = models.CharField(max_length=255, blank=True, null=True)
    total_jobs = models.IntegerField(blank=True, null=True)
    pending_jobs = models.IntegerField(blank=True, null=True)
    failed_jobs = models.IntegerField(blank=True, null=True)
    failed_job_ids = models.TextField(blank=True, null=True)
    options = models.TextField(blank=True, null=True)
    cancelled_at = models.IntegerField(blank=True, null=True)
    created_at = models.IntegerField(blank=True, null=True)
    finished_at = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'job_batches'


class Jobs(models.Model):
    id = models.BigAutoField(primary_key=True)
    queue = models.CharField(max_length=255, blank=True, null=True)
    payload = models.TextField(blank=True, null=True)
    attempts = models.PositiveSmallIntegerField(blank=True, null=True)
    reserved_at = models.IntegerField(blank=True, null=True)
    available_at = models.IntegerField(blank=True, null=True)
    created_at = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'jobs'


class Migrations(models.Model):
    id = models.AutoField(primary_key=True)
    migration = models.CharField(max_length=255, blank=True, null=True)
    batch = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'migrations'


class PasswordResetTokens(models.Model):
    email = models.CharField(primary_key=True, max_length=255)
    token = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'password_reset_tokens'


class Permissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    guard_name = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'permissions'
        unique_together = (('name', 'guard_name'),)


class Roles(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    guard_name = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'roles'
        unique_together = (('name', 'guard_name'),)


class Sessions(models.Model):
    id = models.CharField(primary_key=True, max_length=255)
    user_id = models.BigIntegerField(blank=True, null=True)
    ip_address = models.CharField(max_length=45, blank=True, null=True)
    user_agent = models.TextField(blank=True, null=True)
    payload = models.TextField(blank=True, null=True)
    last_activity = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sessions'


class Users(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    username = models.CharField(unique=True, max_length=255, blank=True, null=True)
    email = models.CharField(unique=True, max_length=255, blank=True, null=True)
    email_verified_at = models.DateTimeField(blank=True, null=True)
    password = models.CharField(max_length=255, blank=True, null=True)
    remember_token = models.CharField(max_length=100, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    phone = models.CharField(max_length=255, blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    comment = models.TextField(blank=True, null=True)
    created_by = models.ForeignKey('self', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'self',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='users_updated_by_set',
        blank=True,
        null=True,
    )
    role = models.ForeignKey(Roles, models.DO_NOTHING, blank=True, null=True)
    user_login = models.ForeignKey('UserLogins', models.DO_NOTHING, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'users'


class UserLogins(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(Users, models.DO_NOTHING, blank=True, null=True)
    ip_address = models.CharField(max_length=255, blank=True, null=True)
    login_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user_logins'


class RolesHasPermissions(models.Model):
    pk = models.CompositePrimaryKey('permission', 'role')
    permission = models.ForeignKey(Permissions, models.DO_NOTHING)
    role = models.ForeignKey(Roles, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'role_has_permissions'


class ModelHasPermissions(models.Model):
    pk = models.CompositePrimaryKey('permission', 'model_id', 'model_type')
    permission = models.ForeignKey(Permissions, models.DO_NOTHING)
    model_type = models.CharField(max_length=255)
    model_id = models.BigIntegerField()

    class Meta:
        managed = False
        db_table = 'model_has_permissions'


class ModelHasRoles(models.Model):
    pk = models.CompositePrimaryKey('role', 'model_id', 'model_type')
    role = models.ForeignKey(Roles, models.DO_NOTHING)
    model_type = models.CharField(max_length=255)
    model_id = models.BigIntegerField()

    class Meta:
        managed = False
        db_table = 'model_has_roles'


class AdministrativeArea(models.Model):
    id = models.BigAutoField(primary_key=True)
    parent_id = models.BigIntegerField(blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    slug = models.CharField(unique=True, max_length=255, blank=True, null=True)
    rank = models.CharField(max_length=255, blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='administrativearea_updated_by_set',
        blank=True,
        null=True,
    )
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'administrative_area'


class Localities(models.Model):
    id = models.BigAutoField(primary_key=True)
    administrative_area = models.ForeignKey(AdministrativeArea, models.DO_NOTHING, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    rank = models.IntegerField(blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='localities_updated_by_set',
        blank=True,
        null=True,
    )
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'localities'


class Customers(models.Model):
    id = models.BigAutoField(primary_key=True)
    pan_no = models.CharField(unique=True, max_length=255, blank=True, null=True)
    party_name = models.CharField(max_length=255, blank=True, null=True)
    locality = models.ForeignKey(Localities, models.DO_NOTHING, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    rank = models.CharField(max_length=255, blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='customers_updated_by_set',
        blank=True,
        null=True,
    )
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    opening_balance = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    legal_name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'customers'


class ContactPersons(models.Model):
    id = models.BigAutoField(primary_key=True)
    customer = models.ForeignKey(Customers, models.DO_NOTHING, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    phone_number = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='contactpersons_updated_by_set',
        blank=True,
        null=True,
    )
    status = models.IntegerField(blank=True, null=True)
    role = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    preferred_contact = models.IntegerField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'contact_persons'


class SalesPersons(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    phone = models.CharField(max_length=255, blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='salespersons_updated_by_set',
        blank=True,
        null=True,
    )
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sales_persons'


class ContractNames(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='contractnames_updated_by_set',
        blank=True,
        null=True,
    )

    class Meta:
        managed = False
        db_table = 'contract_names'


class ContractTypes(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='contracttypes_updated_by_set',
        blank=True,
        null=True,
    )
    type = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'contract_types'


class Contracts(models.Model):
    id = models.BigAutoField(primary_key=True)
    customer = models.ForeignKey(Customers, models.DO_NOTHING, blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    validity_years = models.IntegerField(blank=True, null=True)
    valid_till = models.DateField(blank=True, null=True)
    amount = models.FloatField(blank=True, null=True)
    sold_by = models.ForeignKey(SalesPersons, models.DO_NOTHING, db_column='sold_by', blank=True, null=True)
    contract_file = models.CharField(max_length=255, blank=True, null=True)
    created_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='created_by',
        related_name='contracts_created_by_set',
        blank=True,
        null=True,
    )
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='contracts_updated_by_set',
        blank=True,
        null=True,
    )
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    paymentterm_total = models.FloatField(blank=True, null=True)
    is_verified = models.IntegerField(blank=True, null=True)
    verified_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='verified_by', blank=True, null=True)
    contract_name = models.ForeignKey(ContractNames, models.DO_NOTHING, blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    updated = models.IntegerField(blank=True, null=True)
    remarks = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'contracts'


class Contractfiles(models.Model):
    id = models.BigAutoField(primary_key=True)
    contract = models.ForeignKey(Contracts, models.DO_NOTHING, blank=True, null=True)
    contract_file = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    original_name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'contractfiles'


class ContractExtenddates(models.Model):
    id = models.BigAutoField(primary_key=True)
    valid_till = models.DateField(blank=True, null=True)
    approved_by = models.CharField(max_length=255, blank=True, null=True)
    sales_person = models.ForeignKey(SalesPersons, models.DO_NOTHING, blank=True, null=True)
    contract = models.ForeignKey(Contracts, models.DO_NOTHING, blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='contractextenddates_updated_by_set',
        blank=True,
        null=True,
    )
    reason_behind_date_extend = models.TextField(blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'contract_extenddates'


class Annualmaintenancecosts(models.Model):
    id = models.BigAutoField(primary_key=True)
    contract = models.ForeignKey(Contracts, models.DO_NOTHING, blank=True, null=True)
    type = models.CharField(max_length=255, blank=True, null=True)
    effective_date = models.DateField(blank=True, null=True)
    amount = models.FloatField(blank=True, null=True)
    percent = models.FloatField(blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='annualmaintenancecosts_updated_by_set',
        blank=True,
        null=True,
    )
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    total_cost = models.FloatField(blank=True, null=True)
    increment_from = models.DateField(blank=True, null=True)
    increment_percent = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    increment_years = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'annualmaintenancecosts'


class PaymentTerms(models.Model):
    id = models.BigAutoField(primary_key=True)
    contract = models.ForeignKey(Contracts, models.DO_NOTHING, blank=True, null=True)
    customer = models.ForeignKey(Customers, models.DO_NOTHING, blank=True, null=True)
    due_date = models.CharField(max_length=255, blank=True, null=True)
    remarks = models.CharField(max_length=255, blank=True, null=True)
    installment = models.IntegerField(blank=True, null=True)
    percent = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    amount = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='paymentterms_updated_by_set',
        blank=True,
        null=True,
    )
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    contract_type = models.ForeignKey(ContractTypes, models.DO_NOTHING, blank=True, null=True)
    received_amount = models.FloatField(blank=True, null=True)
    received_date = models.DateField(blank=True, null=True)
    received_remarks = models.TextField(blank=True, null=True)
    rate = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)
    quantity = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)
    vat_applied = models.IntegerField(blank=True, null=True)
    total_amount = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    discounttype = models.CharField(max_length=255, blank=True, null=True)
    discount = models.CharField(max_length=255, blank=True, null=True)
    contract_medium = models.CharField(max_length=255, blank=True, null=True)
    type = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'payment_terms'


class Invoices(models.Model):
    id = models.BigAutoField(primary_key=True)
    invoice_number = models.CharField(unique=True, max_length=255, blank=True, null=True)
    bill_type = models.CharField(max_length=255, blank=True, null=True)
    invoice_date = models.DateField(blank=True, null=True)
    fiscal_year = models.CharField(max_length=255, blank=True, null=True)
    modeofpayment = models.CharField(max_length=255, blank=True, null=True)
    customer = models.ForeignKey(Customers, models.DO_NOTHING, blank=True, null=True)
    gross_amount = models.FloatField(blank=True, null=True)
    discount = models.FloatField(blank=True, null=True)
    taxable_value = models.FloatField(blank=True, null=True)
    vat = models.FloatField(blank=True, null=True)
    totalamount = models.FloatField(blank=True, null=True)
    transaction_date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    performa = models.ForeignKey('self', models.DO_NOTHING, blank=True, null=True)
    status = models.CharField(max_length=255, blank=True, null=True)
    remarks = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'invoices'


class InvoicePaymentTerms(models.Model):
    id = models.BigAutoField(primary_key=True)
    payment_term = models.ForeignKey(PaymentTerms, models.DO_NOTHING, blank=True, null=True)
    invoice = models.ForeignKey(Invoices, models.DO_NOTHING, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    gross_amount = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)
    net_amount = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'invoice_payment_terms'


class ReceivedModes(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    account_no = models.CharField(max_length=255, blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='receivedmodes_updated_by_set',
        blank=True,
        null=True,
    )
    account_holder_name = models.CharField(max_length=255, blank=True, null=True)
    branch = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'received_modes'


class Receipts(models.Model):
    id = models.BigAutoField(primary_key=True)
    payment_term = models.ForeignKey(PaymentTerms, models.DO_NOTHING, blank=True, null=True)
    received_amount = models.FloatField(blank=True, null=True)
    date = models.CharField(max_length=255, blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='receipts_updated_by_set',
        blank=True,
        null=True,
    )
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    received_mode = models.ForeignKey(ReceivedModes, models.DO_NOTHING, blank=True, null=True)
    contract = models.ForeignKey(Contracts, models.DO_NOTHING, blank=True, null=True)
    customer = models.ForeignKey(Customers, models.DO_NOTHING, blank=True, null=True)
    received_remarks = models.TextField(blank=True, null=True)
    received_mode_label = models.CharField(db_column='received_mode', max_length=255, blank=True, null=True)
    receipt_no = models.CharField(max_length=255, blank=True, null=True)
    receipt_file = models.CharField(max_length=255, blank=True, null=True)
    status = models.CharField(max_length=255, blank=True, null=True)
    discount_amount = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    adjustment = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'receipts'


class ReceiptInfo(models.Model):
    id = models.BigAutoField(primary_key=True)
    customer = models.ForeignKey(Customers, models.DO_NOTHING, blank=True, null=True)
    receipt_no = models.CharField(max_length=255, blank=True, null=True)
    receipt_file = models.CharField(max_length=255, blank=True, null=True)
    received_date = models.CharField(max_length=255, blank=True, null=True)
    opening_balance = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    gross_amount = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    discount_amount = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    adjustment_amount = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    net_amount = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    received_amount = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    remarks = models.TextField(blank=True, null=True)
    received_mode = models.ForeignKey(ReceivedModes, models.DO_NOTHING, blank=True, null=True)
    balance = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='receiptinfo_updated_by_set',
        blank=True,
        null=True,
    )
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    narration = models.CharField(max_length=255, blank=True, null=True)
    version = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'receipt_info'


class ReceiptTables(models.Model):
    id = models.BigAutoField(primary_key=True)
    receipt_info = models.ForeignKey(ReceiptInfo, models.DO_NOTHING, blank=True, null=True)
    opening_balance = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    payment_term = models.ForeignKey(PaymentTerms, models.DO_NOTHING, blank=True, null=True)
    gross_amount = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    discount_amount = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    adjustment_amount = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    net_amount = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    received_amount = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    balance = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'receipt_tables'


class FollowUps(models.Model):
    id = models.BigAutoField(primary_key=True)
    customer = models.ForeignKey(Customers, models.DO_NOTHING, blank=True, null=True)
    follow_up_date = models.DateField(blank=True, null=True)
    follow_up_time = models.TimeField(blank=True, null=True)
    next_follow_up_date = models.DateField(blank=True, null=True)
    next_follow_up_time = models.TimeField(blank=True, null=True)
    via = models.CharField(max_length=255, blank=True, null=True)
    note = models.TextField(blank=True, null=True)
    status = models.ForeignKey('Status', models.DO_NOTHING, db_column='status_id', blank=True, null=True)
    followup_done_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='followups_updated_by_set',
        blank=True,
        null=True,
    )
    contact_person = models.ForeignKey(ContactPersons, models.DO_NOTHING, blank=True, null=True)
    message = models.TextField(blank=True, null=True)
    completed = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'follow_ups'


class Status(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    color = models.CharField(max_length=255, blank=True, null=True)
    note = models.TextField(blank=True, null=True)
    created_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='created_by',
        related_name='status_created_set',
        blank=True,
        null=True,
    )
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='status_updated_set',
        blank=True,
        null=True,
    )
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'status'


class AlertTemplates(models.Model):
    id = models.BigAutoField(primary_key=True)
    type = models.CharField(max_length=255, blank=True, null=True)
    to_whom = models.CharField(max_length=255, blank=True, null=True)
    alert_preference = models.CharField(max_length=255, blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='alerttemplates_updated_by_set',
        blank=True,
        null=True,
    )

    class Meta:
        managed = False
        db_table = 'alert_templates'


class AlertConfigurations(models.Model):
    id = models.BigAutoField(primary_key=True)
    alert_before_expired_in_days = models.CharField(max_length=255, blank=True, null=True)
    alert_per_day = models.CharField(max_length=255, blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    alert_type = models.CharField(max_length=255, blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='alertconfigurations_updated_by_set',
        blank=True,
        null=True,
    )
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    time_gap_minutes = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'alertconfigurations'


class CustomerAdjustments(models.Model):
    id = models.BigAutoField(primary_key=True)
    customer = models.ForeignKey(Customers, models.DO_NOTHING, blank=True, null=True)
    type = models.CharField(max_length=255, blank=True, null=True)
    amount = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    status = models.CharField(max_length=255, blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='customeradjustments_updated_by_set',
        blank=True,
        null=True,
    )
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    received_mode = models.ForeignKey(
        'ReceivedModes',
        models.DO_NOTHING,
        db_column='received_mode_id',
        blank=True,
        null=True,
    )

    class Meta:
        managed = False
        db_table = 'customer_adjustments'


class CustomerUpdate(models.Model):
    id = models.BigAutoField(primary_key=True)
    customer = models.ForeignKey(Customers, models.DO_NOTHING, blank=True, null=True)
    is_updated = models.IntegerField(blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='customerupdate_updated_by_set',
        blank=True,
        null=True,
    )
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'customer_update'


class DocumentDispatchLogs(models.Model):
    id = models.BigAutoField(primary_key=True)
    dispatchable_type = models.CharField(max_length=255, blank=True, null=True)
    dispatchable_id = models.BigIntegerField(blank=True, null=True)
    dispatch_date = models.DateTimeField(blank=True, null=True)
    type = models.CharField(max_length=255, blank=True, null=True)
    delivery_channel = models.CharField(max_length=255, blank=True, null=True)
    delivery_by = models.CharField(max_length=255, blank=True, null=True)
    delivery_address = models.CharField(max_length=255, blank=True, null=True)
    remarks = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='documentdispatchlogs_updated_by_set',
        blank=True,
        null=True,
    )

    class Meta:
        managed = False
        db_table = 'document_dispatch_logs'


class EmailApiTokens(models.Model):
    id = models.BigAutoField(primary_key=True)
    mail_driver = models.CharField(max_length=255, blank=True, null=True)
    mail_host = models.CharField(max_length=255, blank=True, null=True)
    mail_port = models.CharField(max_length=255, blank=True, null=True)
    mail_username = models.CharField(max_length=255, blank=True, null=True)
    mail_password = models.CharField(max_length=255, blank=True, null=True)
    mail_encryption = models.CharField(max_length=255, blank=True, null=True)
    mail_from_address = models.CharField(max_length=255, blank=True, null=True)
    mail_from_name = models.CharField(max_length=255, blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='emailapitokens_updated_by_set',
        blank=True,
        null=True,
    )
    deleted_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'emailapitokens'


class EmailFiles(models.Model):
    id = models.BigAutoField(primary_key=True)
    file_path = models.CharField(max_length=255, blank=True, null=True)
    emaillog = models.ForeignKey('EmailLogs', models.DO_NOTHING, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'emailfiles'


class EmailLogs(models.Model):
    id = models.BigAutoField(primary_key=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    subject = models.CharField(max_length=255, blank=True, null=True)
    message = models.TextField(blank=True, null=True)
    batch = models.IntegerField(blank=True, null=True)
    alert_template = models.ForeignKey(AlertTemplates, models.DO_NOTHING, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    error_message = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=255, blank=True, null=True)
    alert_type = models.CharField(max_length=255, blank=True, null=True)
    customer = models.ForeignKey(Customers, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'emaillogs'


class InvoiceAdvanceSettlements(models.Model):
    id = models.BigAutoField(primary_key=True)
    customer = models.ForeignKey(Customers, models.DO_NOTHING, blank=True, null=True)
    invoice = models.ForeignKey(Invoices, models.DO_NOTHING, blank=True, null=True)
    payment_term = models.ForeignKey(PaymentTerms, models.DO_NOTHING, blank=True, null=True)
    source_type = models.CharField(max_length=255, blank=True, null=True)
    source_id = models.BigIntegerField(blank=True, null=True)
    settled_amount = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='invoiceadvancesettlements_updated_by_set',
        blank=True,
        null=True,
    )
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    gross_amount = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    net_amount = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    balance = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'invoiceadvancesettlements'


class Menus(models.Model):
    id = models.BigAutoField(primary_key=True)
    role = models.CharField(max_length=255, blank=True, null=True)
    parent_id = models.BigIntegerField(blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    url = models.CharField(max_length=255, blank=True, null=True)
    rank = models.IntegerField(blank=True, null=True)
    icon = models.CharField(max_length=255, blank=True, null=True)
    permission_key = models.CharField(max_length=255, blank=True, null=True)
    is_active = models.IntegerField(blank=True, null=True)
    is_view_menu = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='menus_updated_by_set',
        blank=True,
        null=True,
    )

    class Meta:
        managed = False
        db_table = 'menus'


class MenusVersions2(models.Model):
    id = models.BigAutoField(primary_key=True)
    role = models.CharField(max_length=255, blank=True, null=True)
    parent_id = models.BigIntegerField(blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    url = models.CharField(max_length=255, blank=True, null=True)
    rank = models.IntegerField(blank=True, null=True)
    icon = models.CharField(max_length=255, blank=True, null=True)
    permission_key = models.CharField(max_length=255, blank=True, null=True)
    is_active = models.IntegerField(blank=True, null=True)
    is_view_menu = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='menusversions2_updated_by_set',
        blank=True,
        null=True,
    )

    class Meta:
        managed = False
        db_table = 'menus_versions2'


class ProductItems(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='productitems_updated_by_set',
        blank=True,
        null=True,
    )

    class Meta:
        managed = False
        db_table = 'product_items'


class Questionnaires(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    rank = models.IntegerField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    module_type = models.CharField(max_length=255, blank=True, null=True)
    module_id = models.BigIntegerField(blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    options = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='questionnaires_updated_by_set',
        blank=True,
        null=True,
    )

    class Meta:
        managed = False
        db_table = 'questionnaires'


class QuestionnaireModules(models.Model):
    id = models.BigAutoField(primary_key=True)
    questionnaire = models.ForeignKey(Questionnaires, models.DO_NOTHING, blank=True, null=True)
    module_id = models.BigIntegerField(blank=True, null=True)
    module_name = models.CharField(max_length=255, blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    answer = models.CharField(max_length=255, blank=True, null=True)
    remarks = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'questionnaire_modules'


class QuestionnaireAudits(models.Model):
    id = models.BigAutoField(primary_key=True)
    questionnaire = models.ForeignKey(Questionnaires, models.DO_NOTHING, blank=True, null=True)
    verified_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='verified_by', blank=True, null=True)
    remarks = models.TextField(blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    created_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='created_by',
        related_name='questionnaireaudits_created_by_set',
        blank=True,
        null=True,
    )
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    questionnaire_module = models.ForeignKey(QuestionnaireModules, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'questionnaire_audits'


class RoleHasMenus(models.Model):
    id = models.BigAutoField(primary_key=True)
    role = models.ForeignKey(Roles, models.DO_NOTHING, blank=True, null=True)
    menu = models.ForeignKey(Menus, models.DO_NOTHING, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'role_has_menus'


class SmsApiTokens(models.Model):
    id = models.BigAutoField(primary_key=True)
    vendor = models.CharField(max_length=255, blank=True, null=True)
    identity = models.CharField(max_length=255, blank=True, null=True)
    token = models.CharField(max_length=255, blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='smsapitokens_updated_by_set',
        blank=True,
        null=True,
    )

    class Meta:
        managed = False
        db_table = 'sms_api_tokens'


class SmsLogs(models.Model):
    id = models.BigAutoField(primary_key=True)
    recipient = models.CharField(max_length=255, blank=True, null=True)
    message = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=255, blank=True, null=True)
    sender_phone_number = models.CharField(max_length=255, blank=True, null=True)
    response = models.TextField(blank=True, null=True)
    customer = models.ForeignKey(Customers, models.DO_NOTHING, blank=True, null=True)
    sms_api_token = models.ForeignKey(SmsApiTokens, models.DO_NOTHING, blank=True, null=True)
    follow_up = models.ForeignKey(FollowUps, models.DO_NOTHING, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    created_by = models.ForeignKey('Users', models.DO_NOTHING, db_column='created_by', blank=True, null=True)
    updated_by = models.ForeignKey(
        'Users',
        models.DO_NOTHING,
        db_column='updated_by',
        related_name='smslogs_updated_by_set',
        blank=True,
        null=True,
    )
    alert_template = models.ForeignKey(AlertTemplates, models.DO_NOTHING, blank=True, null=True)
    invoice = models.ForeignKey(Invoices, models.DO_NOTHING, blank=True, null=True)
    alert_type = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sms_logs'


class Tenants(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    user = models.ForeignKey(Users, models.DO_NOTHING, blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tenants'
