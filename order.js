class Dossier{
    constructor ( id_Dossier, id_DossierState, id_DossierType, id_DossierCategory, DossierNumber, RepetitionNumber, OrderReference, FirmNamefacture, FirmNamegestion, FirmNameclient, FirmNamesousclient, DossierName, RepetitionProcessingDateTime, UserName, OpeningDateTime, Description, Descriptionetatfacture, InvoiceReference, Descriptiontypedossier, Descriptioncategoriedossier, Edition, ObsoleteDossier ){

            
    this.id_Dossier = id_Dossier;

    this.id_DossierState = id_DossierState;

    this.id_DossierType = id_DossierType;

    this.id_DossierCategory = id_DossierCategory;

    this.DossierNumber = DossierNumber;

    this.RepetitionNumber = RepetitionNumber;

    this.OrderReference = OrderReference;

    this.FirmNamefacture = FirmNamefacture;

    this.FirmNamegestion = FirmNamegestion;

    this.FirmNameclient = FirmNameclient;

    this.FirmNamesousclient = FirmNamesousclient;

    this.DossierName = DossierName;

    this.RepetitionProcessingDateTime = RepetitionProcessingDateTime;

    this.UserName = UserName;

    this.OpeningDateTime = OpeningDateTime;

    this.Description = Description;

    this.Descriptionetatfacture = Descriptionetatfacture;

    this.InvoiceReference =  InvoiceReference;

    this.Descriptiontypedossier = Descriptiontypedossier;

     this.Descriptioncategoriedossier = Descriptioncategoriedossier;

     this.Edition = Edition;

     this.ObsoleteDossier = ObsoleteDossier;
    }

}
module.exports = Dossier;